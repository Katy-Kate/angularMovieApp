import { Injectable } from "@angular/core";
import { IMovie } from "../interfaces/MovieInterface";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { host_url, default_query_options } from "../data/api";
import { Observable } from "rxjs";

@Injectable()
export class MoviesService {
  headers = new HttpHeaders({
    "Content-type": "application/json"
  });

  constructor(private _http: HttpClient) {}

  getMovies(url: string, params?: object): Observable<any> {
    return this._http.get(`${host_url}${url}?`, {
      params: default_query_options,
      ...params,
      headers: this.headers
    });
  }
  handleError(error: Response) {
    console.log(error);
    return Observable.throw(error || "Server Error");
  }
}
