import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';

import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})

export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;

  @Output() ingredientAdded = new EventEmitter< Ingredient >();

  constructor() { }

  ngOnInit() {
  }

  onIngredientAdded() {
    // console.log('ingredient name: ' + this.nameInput.nativeElement.value);
    // console.log('ingredient amount: ' + this.amountInput.nativeElement.value);
    this.ingredientAdded.emit(new Ingredient(this.nameInputRef.nativeElement.value, this.amountInputRef.nativeElement.value));
    this.nameInputRef.nativeElement.value = this.amountInputRef.nativeElement.value = '';
  }
}

// once item is added, use view child to grab name and amount values
// use ingredient model and emit event to shopping-list parent
