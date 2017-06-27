import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RecipesService } from '../../../shared/services/recipes/recipes.service';

import { Recipe } from '../../../shared/models/recipe';

@Component({
	selector: 'search-button',
	templateUrl: './search-button.component.html',
	styleUrls: ['./search-button.component.scss'],
})
export class SearchButtonComponent {
	constructor(private recipesService: RecipesService, private router: Router) {}

	onClick() {
		this.recipesService
			.getRecieptsCount()
			.subscribe(id => this.router.navigate(['/recipe', id]));
	}
}
