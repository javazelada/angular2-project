import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>root Component</h1>
    <fa-lifecycle *ngIf="!delete" [bindable]="boundValue" >
    	<p>{{test}}</p>
    </fa-lifecycle>
    <button (click)="delete = true" >click to delete</button>
    <button (click)="test = 'Change value'" >click to Change content</button>
    <button (click)="boundValue = 2000" >click to Change binding</button>
    `
})
export class AppComponent {
    delete = false;
    test = 'start value';
    boundValue = 1000;
}
