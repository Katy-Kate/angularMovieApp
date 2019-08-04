import { Component, OnInit } from "@angular/core";
import { IMAGE_PATH, IMAGE_DEFAULT, DATE_OPTIONS } from "../data/data";
import { IDateOptions } from "../interfaces/DateOptions";
import { IMovie } from "../interfaces/MovieInterface";
import { MoviesService } from "./movies.service.js";
import { ErrorObserver } from "rxjs";

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
  listFilter: string = " ";
  tableHeader: string[] = [
    "Movie",
    "Language",
    "Available",
    "Popularity",
    "Reviews"
  ];
  loading: boolean = false;
  movies: IMovie[];
  image_default: string = IMAGE_DEFAULT;
  image_path: string = IMAGE_PATH;
  errorMessage: any;
  constructor(private _movieServise: MoviesService) {}

  toggleImage(): void {
    this.seePoster = !this.seePoster;
  }

  ngOnInit() {
    this.getMovies("/movie/popular");
  }

  getMovies(url): void {
    this.loading = true;
    this._movieServise.getMovies(url).subscribe(
      data => {
        this.movies = data.results;
        this.loading = false;
      },
      error => {
        this.errorMessage = error;
        this._movieServise.handleError(error);
        this.loading = false;
      }
    );
  }

  onRatingClicked(message: string): void {
    this.pageTitle = "Movie List" + message;
  }
}
