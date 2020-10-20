import { Component, Input, OnInit, OnChanges } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'form-validate',
  templateUrl: './form-validate.html'
})
export class FormValidateComponent implements OnInit, OnChanges {
  @Input() key: any;
  @Input() name: string;
  @Input() value = '';
  @Input() model: Object = {};
  @Input() custom_text: string = '';
  minlength: any;

  constructor() {
  }

  ngOnInit() {
    this.key['_rawValidators'].map((value) => {
      if (value['minlength']) {
        this.minlength = value.minlength;
      }
    });
  }

  ngOnChanges() {}
}
