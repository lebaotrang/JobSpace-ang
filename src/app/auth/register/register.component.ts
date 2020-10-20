import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { SnotifyService } from 'ng-snotify';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  account = { name: '', email: 'takor17924@septicvernon.com', phone: '', password: ''};
  isHandle = false;

  constructor(
    public _auth: AuthService,
    public _router: Router,
    private _notify: SnotifyService,
  ) { 
    if (this._auth.token) { this._router.navigate(['/']); }
  }

  ngOnInit(): void {
  }

  onSubmit(f:NgForm) {
    console.log(f)
    let data = {
      email: f.value.email,
      phone: f.value.phone,
      name: f.value.name,
      password: f.value.password
    }
    this.isHandle = true;
    this._auth.regiter(data).subscribe(
      data => {
        this.isHandle = false;
        this._notify.success(data.message);
      },
      error => {
        this.isHandle = false;
      }
    );
  }
}
