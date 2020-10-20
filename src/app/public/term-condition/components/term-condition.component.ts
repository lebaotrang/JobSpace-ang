import { Component, OnInit } from '@angular/core';
import { TermConditionService } from '../services/term-condition.service';

@Component({
  selector: 'app-term-condition',
  templateUrl: './term-condition.component.html',
  styleUrls: ['./term-condition.component.css']
})
export class TermConditionComponent implements OnInit {
  isFetchData = false;
  data = null;
  constructor(private _service: TermConditionService) { }

  ngOnInit(): void {
    this.getData();
  }

  getData = () => {
    this.isFetchData = true;
    this._service.getTermCondition().subscribe(data => {
      this.isFetchData = false;
      console.log(data)
      this.data = data.data;
    }, error => {
      this.isFetchData = false;
    })
  }

}
