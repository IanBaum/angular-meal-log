import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'new-meal',
  template: `
    <h1>New Meal</h1>
    <div>
      <label>Enter Food:</label>
      <input #newFood>
    </div>
    <div>
      <label>Enter Details:</label>
      <input #newDetails>
    </div>
    <div>
      <label>Enter Calories:</label>
      <input #newCalories>
    </div>
    <div>
      <label>Enter Meal ID:</label>
      <input #newId>
      <button (click)="
      addClicked(newFood.value, newDetails.value, newCalories.value, newId.value);
      newFood.value='';
      newId.value='';
      newDetails.value='';
      newCalories.value='';
      " class="btn">Submit</button>
    </div>
  `
})

export class NewMealComponent{
  @Output() newMealSender = new EventEmitter();
  addClicked(food: string, details: string, calories: number, id: number){
    var newMealToAdd: Meal = new Meal(food, details, calories, id);
    this.newMealSender.emit(newMealToAdd);
  }
}
