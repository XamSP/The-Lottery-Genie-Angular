import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-my-signup-form',
  templateUrl: './my-signup-form.component.html',
  styleUrls: ['./my-signup-form.component.scss']
})


export class MySignupFormComponent implements OnInit {
  user = { name: '', email: '', username: '', password: '' };
  error: String;

  constructor(private session: AuthService, private router: Router) { }

  ngOnInit() {
    this.session.isLoggedIn()
      .subscribe(
        next => { this.router.navigate(['']); },
        err => { this.error = err; }
      );
  }

  signup() {
    this.session.signup(this.user)
      .subscribe(
        next => { this.router.navigate(['']); },
        err => { this.error = err; }
      );
  }

}
