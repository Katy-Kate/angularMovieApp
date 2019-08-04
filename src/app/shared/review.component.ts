import {
  Component,
  OnChanges,
  Input,
  Output,
  EventEmitter
} from "@angular/core";

@Component({
  selector: "md-review",
  templateUrl: "./review.component.html",
  styleUrls: ["./review.component.css"]
})
export class ReviewComponent implements OnChanges {
  @Input() rating: number;
  reviewWidth: number;
  @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();

  ngOnChanges(): void {
    this.reviewWidth = Math.ceil(this.rating / 10);
  }
  onClick() {
    this.ratingClicked.emit(`, this movie got a rating of ${this.rating}`);
  }
}
