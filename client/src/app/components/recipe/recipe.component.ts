import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';

import { RecipesService } from '../../shared/services/recipes/recipes.service';

import { Recipe } from '../../shared/models/recipe';

@Component({
	selector: 'app-recipe',
	templateUrl: './recipe.component.html',
	styleUrls: ['./recipe.component.css'],
})
export class RecipeComponent implements OnInit {
	//model
	private recipe: Recipe;

	constructor(
		private recipesService: RecipesService,
		private route: ActivatedRoute
	) {}

	ngOnInit(): void {
		this.getRecept();
	}

	getRecept(): void {
		this.route.params
			.switchMap((params: Params) => {
				return this.recipesService.getReciept(+params['id']);
			})
			.subscribe(recipe => {
				this.recipe = recipe;
			});
	}
}
