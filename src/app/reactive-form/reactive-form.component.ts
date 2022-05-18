import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {

  constructor(private fb:FormBuilder) { }
  myForm!:  FormGroup ;
  public Users:Array<string | number> =[];
  public status:string ="Active";
  public submitted : boolean = false;
  ngOnInit(): void {
    const getLocalUsers = localStorage.getItem("Users");
    console.log("Check Local Users",getLocalUsers);
    this.myForm = this.fb.group({
      'email':new FormControl(null,[Validators.required,Validators.email]),
      'password': new FormControl(null,[Validators.required,Validators.maxLength(12),Validators.minLength(4)]),
      'active' : new FormControl(null,Validators.required)
    })
  }


  public onSubmit() {
    console.log("Check Form Values:",this.myForm.value);
    this.Users.push(this.myForm.value)
    console.log("Check users:",this.Users)
    this.myForm.reset();
    //set data in local storage
    const jsonData = JSON.stringify(this.Users);
    localStorage.setItem("Users",jsonData);
  }
  onReset() {
    this.submitted = false;
    this.myForm.reset();
  }
}
