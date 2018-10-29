import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-genie-name',
  templateUrl: './my-genie-name.component.html',
  styleUrls: ['./my-genie-name.component.scss'],
  template: `
  <input #myInput (keyup)="onKey(myInput.value)">  <h4> {{ myInput.value}} </h4>
  `
})
export class MyGenieName {
  onKey(value) {
    console.log(`Input value: ${value}`)
  }
}


// @Component({
//   template: `
//       <input #myInput (keyup)="onKey(myInput.value)">
//   `
// })
// export class MyEventBindingComponent() {
//   onKey(value) {
//       console.log(`Input value: ${value}`);
//   }
// }