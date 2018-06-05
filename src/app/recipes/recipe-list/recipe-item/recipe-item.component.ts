import { Component, OnInit, Input } from '@angular/core';

import { RecipeService } from '../../recipe.service';
import { Recipe } from '../../recipe.model';


@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  constructor(private recipeService: RecipeService) { }
  // get the input from recipe list parent
  // recipe will be type Recipe
  @Input() recipe: Recipe;

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
    // emit event with recipe info to recipes parent
    // this.recipeSelected.emit(recipe);
    this.recipeService.recipeSelected.emit(recipe);
  }
}
