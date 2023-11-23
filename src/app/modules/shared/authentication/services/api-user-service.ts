import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { BehaviorSubject, Observable, map } from 'rxjs';
import { User } from '../interfaces/user.interface';
import { Response } from '../../../core/interfaces/response';

@Injectable({
  providedIn: 'root'
})
export class ApiUserService {

  apiURL = 'https://localhost:44355/api/User/login';
  private userSubject!: BehaviorSubject<User>;
  
  constructor(private http: HttpClient) { }


  login(user: User): Observable<Response> {
    return this.http.post<Response>(this.apiURL, user).pipe(
      map(response => {
        if (response.success === 1) {
          const user = response.data;
          sessionStorage.setItem('user', JSON.stringify(user));
          this.userSubject.next(user);
        }
        return response
      }
    ));
  }

  logout() {
    sessionStorage.removeItem('user');
  };
}
