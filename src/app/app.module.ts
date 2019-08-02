import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { MovieListComponent } from "./movies/movie-list.component";
import { DateTransformPipe } from "src/pipes/dateFormat.pipe";
@NgModule({
  declarations: [AppComponent, MovieListComponent, DateTransformPipe],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
