import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

//modules
import { AppRoutingModule } from './modules/app-routing/app-routing.module';

//services
import { RecipesService } from './shared/services/recipes/recipes.service';

//components
import { AppComponent } from './components/app/app.component';
import { HomeComponent } from './components/home/home.component';
import { RecipeComponent } from './components/recipe/recipe.component';

@NgModule({
	declarations: [AppComponent, HomeComponent, RecipeComponent],
	imports: [AppRoutingModule, BrowserModule, HttpModule],
	providers: [RecipesService],
	bootstrap: [AppComponent],
})
export class AppModule {}
