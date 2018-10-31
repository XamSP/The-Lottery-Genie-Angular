import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-signup-form',
  templateUrl: './my-signup-form.component.html',
  styleUrls: ['./my-signup-form.component.scss']
})
export class MySignupFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  submitForm(myForm) {
    console.log(myForm);
  }
}