import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ui-preloader',
  templateUrl: './preloader.component.html',
  styleUrls: ['./preloader.component.scss']
})
export class PreloaderComponent implements OnInit {

  @Input() display = false;
  @Input() data = undefined;
  @Input() showEmpty = true;
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
