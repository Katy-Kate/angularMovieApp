import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { MovieListComponent } from "./movies/movie-list.component";
import { ReviewComponent } from "./shared/review.component";

import { DateTransformPipe } from "src/app/pipes/dateFormat.pipe";
import { MovieFilterPipe } from "./pipes/movie-filter.pipe";
import { MoviesService } from "./movies/movies.service";

@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent,
    ReviewComponent,
    DateTransformPipe,
    MovieFilterPipe
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
