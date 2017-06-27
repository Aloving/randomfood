import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';


@Component({
	selector: 'app-recipe',
	templateUrl: './recipe.component.html',
	styleUrls: ['./recipe.component.css'],
})
export class RecipeComponent implements OnInit {
	//model

	constructor(
		private route: ActivatedRoute
	) {}

	ngOnInit(): void {
		this.getRecept();
	}

	getRecept(): void {
	}
}
