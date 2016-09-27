import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { Recipe } from '../recipe';
import { RecipeService } from '../recipe.service'

@Component({
    selector: 'rb-recipe-list',
    templateUrl: 'recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {
    recipes: Recipe[] = [];

    //@Output() recipeSelected = new EventEmitter<Recipe>();

    constructor(private recipeService: RecipeService) { }
    
    //TODO: Right after it enters, gets the list of receipts. This is equivalent to "on document load". 
    //In Angular we have it available at "component" level, more power.
    ngOnInit() {
        this.recipes = this.recipeService.getRecipes();
    }
    
    //TODO: This is interesting for the tech talk:
    //When an item is selected from the list, it "emits" an event of type "recipeSelected". And as an argument it
    //passes the selected recipe
    //This "emits" can be useful, in case other components want to receive this emit in order to use it for whatever
    //Imagine a general counter of clicked receipts in the website, for example.

    onSelected(recipe: Recipe) {
    //    this.recipeSelected.emit(recipe); 
    }
}
