import { EventEmitter } from "@angular/core";
import { Recipe } from "./recipe.model";

//We're going to use this to manage our recipes. 

export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [ 
        new Recipe('A Test Recipe', 'This is a test', 'https://upload.wikimedia.org/wikipedia/commons/3/39/Recipe.jpg'),
        new Recipe('Another Test Recipe', 'This is a test', 'https://upload.wikimedia.org/wikipedia/commons/3/39/Recipe.jpg')
      ];

    getRecipes() {
        return this.recipes.slice();
    }
}