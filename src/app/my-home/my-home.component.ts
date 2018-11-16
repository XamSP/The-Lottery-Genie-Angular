import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-home',
  templateUrl: './my-home.component.html',
  styleUrls: ['./my-home.component.scss']
})
export class MyHomeComponent implements OnInit {

  title = 'The-Lottery-Genie-Angular';

  constructor(private router: Router) { }


  ngOnInit() {
  }

  goToAbout() {
    this.router.navigate(['/about']);
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }

}
