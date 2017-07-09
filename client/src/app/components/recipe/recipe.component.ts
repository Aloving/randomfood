import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/toPromise';

import { RecipesService } from '../../shared/services/recipes/recipes.service';

import { Recipe } from '../../shared/models/recipe';

@Component({
	selector: 'app-recipe',
	templateUrl: './recipe.component.html',
	styleUrls: ['./recipe.component.scss'],
})
export class RecipeComponent implements OnInit {
	//model
	private recipe: Recipe;
	private nextButtonText: string = 'Следующий рецепт';
	private fetching: boolean = true;

	constructor(
		private recipesService: RecipesService,
		private route: ActivatedRoute
	) {}

	ngOnInit(): void {
		this.getRecept();
	}

	dispatchFetching() {
		this.fetching = !this.fetching;
	}

	onLoad() {
		setTimeout(() => this.dispatchFetching(), 0);
	}

	getRecept(): void {
		this.route.params
			.switchMap((params: Params) => {
				return this.recipesService.getReciept(+params['id']);
			})
			.subscribe(recipe => (this.recipe = recipe));
	}
}
