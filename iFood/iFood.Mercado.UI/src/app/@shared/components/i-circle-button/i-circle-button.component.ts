import { Component, Input } from '@angular/core';

@Component({
  selector: 'i-circle-button',
  templateUrl: './i-circle-button.component.html',
  styleUrls: ['./i-circle-button.component.scss']
})
export class ICircleButtonComponent {
    @Input() disabled: boolean = false;
}
