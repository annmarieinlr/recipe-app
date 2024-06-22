import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { RecipeService } from "../recipes/recipe.service";
import { Recipe } from '../recipes/recipe.model';
import { map, tap } from "rxjs/operators";


@Injectable({providedIn: 'root'})
export class DataStorageService {
    constructor(private http: HttpClient, private recipeService: RecipeService) {}

    storeRecipes() {
        const recipes = this.recipeService.getRecipes();
        this.http.put('https://recipeapp-2b4fb-default-rtdb.firebaseio.com/recipes.json', recipes)
        .subscribe(response => {
            console.log(response);
        });
    }

    fetchRecipes() {
       return this.http.get<Recipe[]>('https://recipeapp-2b4fb-default-rtdb.firebaseio.com/recipes.json')
        .pipe(map(recipes => { //this map is rxjs
            return recipes.map(recipe => {
                return {...recipe, ingredients: recipe.ingredients ? recipe.ingredients: []};
            }); //this map is javascript method
            
        }),
        tap(recipes => {
            this.recipeService.setRecipes(recipes);
        })
    )
           
    }
}