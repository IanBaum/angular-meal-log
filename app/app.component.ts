import { Component } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'my-app',
  template: `
  <div class="container">
    <h1>Meal Log</h1>
    <new-meal
    (newMealSender)="addMeal($event)"
    ></new-meal>
    <meal-list
    [childMealList]="masterMealList"
    (clickSender)="showDetails($event)"
    ></meal-list>
    <edit-meal
    [childSelectedMeal]="selectedMeal"
    (doneClickedSender)="finishedEditing()"
    ></edit-meal>
  </div>
  `
})

export class AppComponent {
    public masterMealList: Meal[] = [
      new Meal("Toast","Slightly burnt", 200, 0),
      new Meal("Pasta","with sauce", 400, 1),
      new Meal("Ice Cream","vanilla",300,2)
    ];

  selectedMeal: Meal = null;
  showDetails(clickedMeal: Meal){
    this.selectedMeal = clickedMeal;
  }
  finishedEditing() {
    this.selectedMeal = null;
  }
  addMeal(newMealFromChild: Meal){
    this.masterMealList.push(newMealFromChild);
  }
}
