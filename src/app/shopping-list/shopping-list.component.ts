import { Subscription } from 'rxjs';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css',
  
})
export class ShoppingListComponent implements OnInit, OnDestroy {

  ingredients: Ingredient[] 
  private ingChangeSub: Subscription;
  
  constructor(private shoppingListService: ShoppingListService) {}
  

  ngOnInit() {
    this.ingredients = this.shoppingListService.getIngredients();
    this.ingChangeSub = this.shoppingListService.ingredientsChanged.subscribe(
      (ingredients: Ingredient[]) => {
      this.ingredients = ingredients;
    });
   }

   onEditItem(index: number){
    this.shoppingListService.startedEditing.next(index);
   }

   ngOnDestroy(): void {
    this.ingChangeSub.unsubscribe();
  }  
}
