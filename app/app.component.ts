import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <div class="container">
    <h1>Meal Log</h1>
    <h3 *ngFor="let currentMeal of meals">{{ currentMeal.food }}</h3>
  </div>
  `
})

export class AppComponent {
  public meals: Meal[] = [
    new Meal("Toast",0),
    new Meal("Pasta",1),
    new Meal("Ice Cream",2)
  ];
}

export class Meal {
  constructor(public food: string, public id: number) {   }
}
