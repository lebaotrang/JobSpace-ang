import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/services/auth.service'

@Component({
  selector: 'app-public',
  templateUrl: './public.component.html',
  styleUrls: ['./public.component.css']
})
export class PublicComponent implements OnInit {

  constructor(public _auth: AuthService) { }

  ngOnInit(): void {
  }

}
