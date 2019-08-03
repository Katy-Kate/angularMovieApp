import { Component, OnInit } from "@angular/core";
import { IMAGE_PATH, IMAGE_DEFAULT, DATE_OPTIONS } from "../data/data";
import { IDateOptions } from "../interfaces/DateOptions";
import { IMovie } from "../interfaces/MovieInterface";
import { MoviesService } from "./movies.service.js";

@Component({
  selector: "mm-movies",
  templateUrl: "./movie-list.component.html",
  providers: [MoviesService]
})
export class MovieListComponent implements OnInit {
  pageTitle: string = "Movie List";
  img_width: number = 150;
  img_margin: number = 2;
  date_options: IDateOptions = DATE_OPTIONS;
  seePoster: boolean = false;
  listFilter: string;
  tableHeader: string[] = [
    "Movie",
    "Language",
    "Available",
    "Popularity",
    "Reviews"
  ];
  movies: IMovie[];
  image_default = IMAGE_DEFAULT;
  image_path = IMAGE_PATH;

  constructor(private _movieServise: MoviesService) {}

  toggleImage(): void {
    this.seePoster = !this.seePoster;
  }
  ngOnInit() {
    console.log("ddd");
    this.movies = this._movieServise.getMovies();
  }

  onRatingClicked(message: string): void {
    this.pageTitle = "Movie List" + message;
  }
}
