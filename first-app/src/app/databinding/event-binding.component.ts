import { Component } from '@angular/core';

@Component({
  selector: 'fa-event-binding',
  template: `
    <button (click)="onClicked()">click me!</button>
  `,
  styles: []
})
export class EventBindingComponent {
  onClicked(){
    alert('It worked!');
    //console.log('enter in  onclicked');
  }
}
