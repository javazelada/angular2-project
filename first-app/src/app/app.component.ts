import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <fa-lifecycle *ngIf="!delete" >
    	<p>{{test}}</p>
    </fa-lifecycle> 
    <button (click)="delete = true" >click to delete</button>
    `
})
export class AppComponent {
    delete = false;
    test = 'start value';
}
 