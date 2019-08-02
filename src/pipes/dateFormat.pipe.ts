import { Pipe, PipeTransform } from "@angular/core";
import { IDateOptions } from "src/app/interfaces/DateOptions";

@Pipe({
  name: "dateTransform"
})
export class DateTransformPipe implements PipeTransform {
  transform(date: "string", args?: IDateOptions) {
    if (!date) return 0;
    let newDate = new Date(date);
    return newDate.toLocaleDateString("en-US", args);
  }
}
