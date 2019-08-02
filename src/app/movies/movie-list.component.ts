import { Component } from "@angular/core";
import data from "./movies.js";
import { IMAGE_PATH, IMAGE_DEFAULT } from "../data/data";

const { results } = data;

@Component({
  selector: "mm-movies",
  templateUrl: "./movie-list.component.html"
})
export class MovieListComponent {
  pageTitle: string = "Movie List";
  img_width: number = 150;
  img_margin: number = 2;
  tableHeader: string[] = [
    "Movie",
    "Language",
    "Available",
    "Popularity",
    "Reviews"
  ];
  movies: any[] = results;
  image_default = IMAGE_DEFAULT;
  image_path = IMAGE_PATH;
}
