import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-pick2-gen',
  templateUrl: './my-pick2-gen.component.html',
  styleUrls: ['./my-pick2-gen.component.scss']
})
export class MyPick2GenComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  randomGenMaster22() {
    let print1 = document.getElementById('Pick-2[1]');
    let print2 = document.getElementById('Pick-2[2]');


    let num1 = Math.floor(Math.random() * 10);
    let num2 = Math.floor(Math.random() * 10);

  }

}
