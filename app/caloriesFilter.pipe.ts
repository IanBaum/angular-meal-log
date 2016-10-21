import {Pipe, PipeTransform} from '@angular/core';
import {Meal} from './meal.model';

@Pipe({
name: "caloriesFilter",
pure: false
})
export class CaloriesFilterPipe implements PipeTransform{
  transform(input: Meal[], desiredCalories){
    console.log(input);
    var output: Meal[] = [];
    if(desiredCalories === ">500"){
      for (var i =0; i < input.length; i++){
        if(input[i].calories >= 500){
          output.push(input[i]);
        }
      }
      console.log("high");
      return output;
    } else if(desiredCalories === "<500"){
      for (var i = 0; i < input.length; i++){
        if(input[i].calories <= 500){
          output.push(input[i]);
        }
      }
      console.log("low");
      return output;
    } else {
      console.log("else");
      return input;
    }
  }
}
