import { Ingredient } from "../shared/ingredient.model";


export class ShoppingListService {
    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10)
      ];

    getIngredients() {
        return this.ingredients.slice(); //slice makes a copy and doesn't access the original.
    }
}