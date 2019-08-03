import { Injectable } from "@angular/core";
import { IMovie } from "../interfaces/MovieInterface";
import movies from "./movies";

@Injectable()
export class MoviesService {
  getMovies(): IMovie[] {
    return movies.results;
  }
}
