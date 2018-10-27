import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-genie-name',
  templateUrl: './my-genie-name.component.html',
  styleUrls: ['./my-genie-name.component.scss'],
  template: `
  <input [(ngModel)]="username">
  <h3> Hello {{username}} ! </h3>
  `
})
export class MyGenieName {
  username: String = " ";
}
