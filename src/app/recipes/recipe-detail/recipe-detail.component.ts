import { Component, OnInit, Input } from '@angular/core';

import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  @Input() recipeDetail: Recipe;

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
  }

  onAddIngredients() {
    // this.shoppingListService.addIngredients(this.recipeDetail.ingredients);
    this.recipeService.addToShoppingList(this.recipeDetail.ingredients);
  }
}
