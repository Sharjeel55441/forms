import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tem-form',
  templateUrl: './tem-form.component.html',
  styleUrls: ['./tem-form.component.scss']
})
export class TemFormComponent implements OnInit {
  public login= {
    email:'',
    password:''
  }
  constructor() { }

  ngOnInit(): void {
  }
  public submitForm(form: any) {
    console.log("Submitted successfully......");
    // console.log(form.value);
    this.login.email = form.value.email;
    this.login.password = form.value.password;
    console.log("Check Form Value",this.login);
    this.formEmpty();
  }
  public formEmpty() {
    this.login.email="";
    this.login.password="";
  }

}
