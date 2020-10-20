import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isHandle = false;
  account = { email: 'franky11@yopmail.com', password: '123456'};

  constructor(
    public _auth: AuthService,
    public _router: Router,
  ) {
    if (this._auth.token) { this._router.navigate(['/']); }
  }

  ngOnInit(): void {
  }

  onSubmit(f:NgForm) {
    this.isHandle = true;
    this._auth.login(this.account).subscribe(
      data => {
        this.isHandle = false;
        this._auth.token = data.data.token;
        this._router.navigate(['/']);
      },
      error => {
        console.log(error);
        this.isHandle = false;
      }
    );
  }

}
