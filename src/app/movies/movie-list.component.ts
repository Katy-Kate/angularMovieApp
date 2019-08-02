import { Component } from "@angular/core";
import data from "./movies.js";
import { IMAGE_PATH, IMAGE_DEFAULT, DATE_OPTIONS } from "../data/data";
import { IDateOptions } from "../interfaces/DateOptions";
import { IMovie } from "../interfaces/MovieInterface";

const { results } = data;

@Component({
  selector: "mm-movies",
  templateUrl: "./movie-list.component.html"
})
export class MovieListComponent {
  pageTitle: string = "Movie List";
  img_width: number = 150;
  img_margin: number = 2;
  date_options: IDateOptions = DATE_OPTIONS;
  seePoster: boolean = false;
  listFilter: string = "";
  tableHeader: string[] = [
    "Movie",
    "Language",
    "Available",
    "Popularity",
    "Reviews"
  ];
  movies: IMovie[] = results;
  image_default = IMAGE_DEFAULT;
  image_path = IMAGE_PATH;

  toggleImage(): void {
    this.seePoster = !this.seePoster;
  }
}
