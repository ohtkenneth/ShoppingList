import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../../recipe.model';


@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  // get the input from recipe list parent
  // recipe will be type Recipe
  @Input() recipe: Recipe;
  @Output() recipeSelected = new EventEmitter< Recipe >();

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
    // emit event with recipe info to recipes parent
    this.recipeSelected.emit(recipe);
  }
}
