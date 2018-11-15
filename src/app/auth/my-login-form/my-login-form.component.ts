import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-my-login-form',
  templateUrl: './my-login-form.component.html',
  styleUrls: ['./my-login-form.component.scss']
})

export class MyLoginFormComponent implements OnInit {
  user = { username: '', password: '' };
  error: String;

  constructor(private session: AuthService, private router: Router) { }

  ngOnInit() { }

  login() {
    this.session.login(this.user)
      .subscribe(
        next => { this.router.navigate(['home']); },
        err => { this.error = err; }
      );
  }

}


