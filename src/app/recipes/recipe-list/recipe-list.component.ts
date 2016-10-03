import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe';
import { RecipeService } from '../recipe.service'

@Component({
    selector: 'rb-recipe-list',
    templateUrl: 'recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {
    recipes: Recipe[] = [];

    constructor(private recipeService: RecipeService) { }
    
    //TODO: Right after it enters, gets the list of receipts. This is equivalent to "on document load". 
    //In Angular we have it available at "component" level, more power.
    ngOnInit() {
        this.recipes = this.recipeService.getRecipes();
    }
}
