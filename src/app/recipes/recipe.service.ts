import { EventEmitter, Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

//We're going to use this to manage our recipes. 
//@injectable allows us to inject a service into a service
@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [ 
        new Recipe(
            'Shrimp Salad', 
            'Seafood sensation', 
            'https://upload.wikimedia.org/wikipedia/commons/3/39/Recipe.jpg',
            [
                new Ingredient('shrimp', 12),
                new Ingredient('head of lettuce', 1)
            ]),
        new Recipe(
            'Mashed Potatoes', 
            'A fluffy treat', 
            'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Sous_vide_mashed_potatoes.jpg/640px-Sous_vide_mashed_potatoes.jpg',
            [
                new Ingredient('potatotes', 7),
                new Ingredient('butter', .5)
            ])
      ];

      constructor(private shoppingListService: ShoppingListService) {}

    getRecipes() {
        return this.recipes.slice();
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.shoppingListService.addIngredients(ingredients);
    }
}