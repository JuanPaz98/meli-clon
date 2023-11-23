import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ApiUserService } from '../../services/api-user-service';

@Component({
  selector: 'meli-formulario',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class MeliFormComponent {

  constructor(private apiUserService: ApiUserService) { }

  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  })

  onSubmit() {
    this.apiUserService.login(this.loginForm.value).subscribe(data => {
      console.log(data);
    });
  }
}
