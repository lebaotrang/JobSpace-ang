import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { BsModalService, BsModalRef, ModalDirective } from 'ngx-bootstrap/modal';
import { NgForm } from '@angular/forms';
import { HomeService } from '../services/home.service';
import { distances } from '../data/distance.data';
import { AuthService } from '../../../auth/services/auth.service'
import { SnotifyService } from 'ng-snotify';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isFetchCategory = false;
  isFetchJob = false;
  isFetchZipcode = false;
  isHandel = false;

  categories = [{id: 0, category: 'All Jobs', deleted_at: null}];
  category_id = this.categories[0].id;
  distances = distances;
  distance_id = distances[0].id;
  jobs = [];
  
  page = 1;
  pageSize = 10;
  totalItems = 10;
  search = '';

  @ViewChild('staticModal') public staticModal: ModalDirective;
  zipcode = null;
  latitude = null;
  longitude = null;

  constructor(private _service: HomeService, public _auth: AuthService, private modalService: BsModalService, private _notify: SnotifyService) { }

  ngOnInit(): void {
    this.getCategories();
    this.getJobs();
  }
  
  getCategories = () => {
    this.isFetchCategory = true;
    this._service.getCategories().subscribe(dt => {
      this.isFetchCategory = false;
      this.categories = [...this.categories, ...dt.data];
      // console.log(this.categories)
    }, error => {
      this.isFetchCategory = false;
    })
  }

  getJobs = () => {
    this.isFetchJob = true;
    this.isHandel = true;
    const { search, category_id, distance_id, latitude, longitude, zipcode, page, pageSize } = this;
    this._service.getJobsByCategory({page, category_id, distance_id, pageSize, search, status, latitude, longitude, zipcode}).subscribe(dt => {
      this.jobs = dt.data.data;
      this.isFetchJob = false;
      this.isHandel = false;
    }, error => {
      this.isFetchJob = false;
      this.isHandel = false;
    })
  }

  onSubmit(f:NgForm) {

  }

  onChangeCategory = () => {
    console.log(this.category_id)
    this.getJobs();
  }

  onChangeDistance = () => {
    console.log(this.distance_id)
    this.getJobs();
  }

  onSubmitCode = (f:NgForm) => {
    this.isHandel = true;
    this.isFetchZipcode = true;
    this._service.getLatLngByZipcode({zip_code: f.value.txtZipcode}).subscribe(dt => {
      if(dt.data) {
        // console.log(dt.data)
        this.latitude = dt.data.latitude;
        this.longitude = dt.data.longitude;
        this.zipcode = dt.data.zip_code;
        this.staticModal.hide();
        this.getJobs();
      } else {
        console.log(dt)
        this._notify.error(dt.message)
      }
      this.isHandel = false;
      this.isFetchZipcode = false;
    }, error => {
      this.isHandel = false;
      this.isFetchZipcode = false;
    })
  }
}
