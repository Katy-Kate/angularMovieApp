import { ModuleWithProviders } from "@angular/core";
import { Routes } from "@angular/router";
import { MovieListComponent } from "../movie-list.component";
export const movieRouts: Routes = [
  { path: "movies", component: MovieListComponent }
  //{ path: 'movie/:id', component: MovieDetailComponent }
];
