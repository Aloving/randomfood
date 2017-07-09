import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
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
<<<<<<< HEAD
	public nextButtonText: string = 'Следующий рецепт';
	public recipe: Recipe;
=======
	private recipe: Recipe;
	private nextButtonText: string = 'Следующий рецепт';
>>>>>>> 7aa30f3303ed55ee80e5947f1185032c23c6a707
	private fetching: boolean = true;

	constructor(
		private recipesService: RecipesService,
		private route: ActivatedRoute,
		private location: Location
	) {}

	goBack() {
		this.dispatchFetching();
		this.location.back();
	}

	ngOnInit(): void {
		this.getRecept();
	}

	dispatchFetching() {
		this.fetching = !this.fetching;
	}

	onLoad() {
<<<<<<< HEAD
		setTimeout(() => this.dispatchFetching(), 100);
=======
		setTimeout(() => this.dispatchFetching(), 0);
>>>>>>> 7aa30f3303ed55ee80e5947f1185032c23c6a707
	}

	getRecept(): void {
		this.route.params
			.switchMap((params: Params) => {
				return this.recipesService.getReciept(+params['id']);
			})
			.subscribe(recipe => (this.recipe = recipe));
	}
}
