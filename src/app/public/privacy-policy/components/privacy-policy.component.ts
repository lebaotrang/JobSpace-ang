import { Component, OnInit } from '@angular/core';
import { PrivacyPolicyService } from '../services/privacy-policy.service'

@Component({
  selector: 'app-privacy-policy',
  templateUrl: './privacy-policy.component.html',
  styleUrls: ['./privacy-policy.component.css']
})
export class PrivacyPolicyComponent implements OnInit {
  isFetchData = false;
  data = null;

  constructor(private _service: PrivacyPolicyService) { }

  ngOnInit(): void {
    this.getData();
  }

  getData = () => {
    this.isFetchData = true;
    this._service.getPrivacyPolicy().subscribe(data => {
      this.isFetchData = false;
      console.log(data)
      this.data = data.data;
    }, error => {
      this.isFetchData = false;
    })
  }

}
