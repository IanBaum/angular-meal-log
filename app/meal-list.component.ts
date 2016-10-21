import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-list',
  template: `
  <h1>Meals from today:</h1>
    <div *ngFor="let currentMeal of childMealList">
      <div (click)="editButtonHasBeenClicked(currentMeal)" class="mealbox">
        <h3 class="meal">{{ currentMeal.food }}</h3>
        <h4>Calories: {{ currentMeal.calories }}</h4>
        <h4>Notes: {{ currentMeal.details }}</h4>
      </div>
    </div>
  `
})

export class MealListComponent {
  @Input() childMealList: Meal[];
  @Output() clickSender = new EventEmitter();
  editButtonHasBeenClicked(mealToEdit: Meal) {
    this.clickSender.emit(mealToEdit);
  }
}
