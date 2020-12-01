import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'i-search-bar',
  template: '<ng-content></ng-content>',
  styleUrls: ['./i-search-bar.component.scss']
})
export class ISearchBarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
