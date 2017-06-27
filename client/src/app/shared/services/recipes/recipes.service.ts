import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { Recipe } from '../../models/recipe';

@Injectable()
export class RecipesService {
	constructor(private http: Http) {}

	getRecieptsCount(): Observable<number> {
		return this.http
			.get('/api/recieptcount')
			.map(res => res.json())
			.catch(this.handleError);
	}

	getReciept(id): Observable<Recipe> {
		return this.http
			.get(`/api/reciept/${id}`)
			.map(res => res.json() as Recipe)
			.catch(this.handleError);
	}

	private handleError(error: any) {
		console.error('Was error', error);
		return Observable.throw(error.message || error);
	}
}
