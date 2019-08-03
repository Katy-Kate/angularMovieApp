import { Pipe, PipeTransform } from "@angular/core";
import { IMovie } from "../interfaces/MovieInterface";

@Pipe({
  name: "movieFilter"
})
export class MovieFilterPipe implements PipeTransform {
  transform(value: IMovie[], filter: string): IMovie[] {
    filter = filter ? filter.toLocaleLowerCase() : null;

    return filter
      ? value.filter(
          (movie: IMovie) =>
            movie.original_title.toLocaleLowerCase().indexOf(filter) >= 0
        )
      : value;
  }
}
