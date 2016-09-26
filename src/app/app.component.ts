import { Component } from '@angular/core';

import { RecipeService } from './recipes'

@Component({
  selector: 'rb-root',
  templateUrl: 'app.component.html',
  providers: [RecipeService]
})
export class AppComponent {

}
