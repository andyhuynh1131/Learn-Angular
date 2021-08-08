import { Component, enableProdMode } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
      <h1 [class.ahihi]="ahihi" [style.color]=color (mouseover)="hoverh1()" (mouseout)="mouseout()" >Welcome phuc dep trai </h1>
      <app-hello></app-hello>
      <app-hi></app-hi>
      <img [src]="imgURL">
      <button (click)="handleClick($event)"> Click Me to {{ ahihi ? 'Show' : 'Hide' }} !</button>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lesson1-Angular';
  imgURL = 'https://www.dungplus.com/wp-content/uploads/2019/12/girl-xinh-600x600.jpg';
  ahihi = true;
  color = 'pink';

  handleClick(event: MouseEvent) {
    console.log(event.target);

    this.ahihi = !this.ahihi
  }

  hoverh1() {
    this.color = 'blue'
  }

  mouseout() {
    this.color = 'pink'
  }

}
