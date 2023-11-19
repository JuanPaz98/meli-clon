import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ApiUserService } from 'src/login/services/api-user-service';

@Component({
  selector: 'meli-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {

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
