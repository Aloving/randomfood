import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RecipeComponent } from '../../components/recipe/recipe.component';
import { HomeComponent } from '../../components/home/home.component';

const routes = [
	{ path: 'recipe/:id', component: RecipeComponent },
	{ path: '', component: HomeComponent },
	{ path: '**', redirectTo: '' }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {}
