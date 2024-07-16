import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MovieDetails, Movies } from '../../core/models/movies';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  constructor(private http: HttpClient) {}

  private readonly MODEL: string = 'movies';

  public getMovies(): Observable<Movies> {
    return this.http.get<Movies>(this.MODEL);
  }

  public getMovieById(id: string): Observable<MovieDetails> {
    return this.http.get<MovieDetails>(`/${this.MODEL}/${id}`);
  }
}
