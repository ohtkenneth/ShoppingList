import { EventEmitter } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';

export class ShoppingListService {
  ingredientsChanged = new EventEmitter<Ingredient[]>();

  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10)
  ];

  constructor() {}

  getIngredients() {
    // return copy of ingredients to keep pure
    return this.ingredients.slice();
  }

  addIngredients(ingredients: Ingredient[]) {
    // add ingredients should always take array
    if (ingredients.length === 1) {
      this.ingredients.push(ingredients[0]);
    } else {
      this.ingredients = this.ingredients.concat(ingredients);
    }
    this.ingredientsChanged.emit(this.ingredients.slice());
  }
}
