import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CityPageComponent } from './city-page/city-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { WeatherListComponent } from './weather-list/weather-list.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: '',
    component: WeatherListComponent,   
  },
  {
    path: 'city', 
    component: CityPageComponent
  },
  { 
    path: '**', 
    component: PageNotFoundComponent 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
