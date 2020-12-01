import { Component, OnInit, Input, Directive } from '@angular/core';

@Directive({
    selector: 'i-empty-state-action'
  })
  export class IEmptyStateActionDirective {}

@Component({
  selector: 'i-empty-state',
  templateUrl: './i-empty-state.component.html',
  styleUrls: ['./i-empty-state.component.scss']
})
export class IEmptyStateComponent implements OnInit {

@Input() icon : string = 'none';
@Input() label : string = 'Título';
@Input() description : string = 'Descricao';

  constructor() { }

  ngOnInit() {
  }

}
