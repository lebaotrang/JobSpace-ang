import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../services/profile.service';
import { AuthService } from '../../../auth/services/auth.service'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  isFetchProfile = false;

  profile: any = {}
  
  max: number = 10;
  rate: number = 7;
  isReadonly: boolean = true;
  x: number = 5;
  y: number = 2;

  constructor(
    public _service: ProfileService, 
    public _auth: AuthService
  ) { }

  ngOnInit(): void {
    this.getProfile()
  }

  getProfile() {
    this.isFetchProfile = true;
    this._service.getProfile(this._auth.idUser).subscribe( data => {
      this.profile = data.data;
      this.isFetchProfile = false;
    }, error => {
      this.isFetchProfile = false;
    })
  }

}
