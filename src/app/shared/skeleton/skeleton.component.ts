import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ui-skeleton',
  templateUrl: './skeleton.component.html',
  styleUrls: ['./skeleton.component.scss']
})
export class SkeletonComponent implements OnInit {

  @Input() display = false;
  @Input() data = undefined;
  constructor() { }

  ngOnInit() {
  }

  /**
   * Shows the loader
   */
  show() {
    this.display = true;
  }

  /**
   * Hides the loader
   */
  hide() {
    this.display = false;
  }

}
