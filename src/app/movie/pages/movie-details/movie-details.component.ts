import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { MovieDetails } from '../../../core/models/movies';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { AsyncPipe, NgIf } from '@angular/common';
import { FormatAmountPipe } from '../../../shared/pipes/format-amount.pipe';
import { FormatDurationPipe } from '../../../shared/pipes/format-duration.pipe';

@Component({
  selector: 'app-movie-details',
  standalone: true,
  imports: [AsyncPipe, NgIf, RouterLink, FormatAmountPipe, FormatDurationPipe],
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.css',
})
export class MovieDetailsComponent implements OnInit {
  private movieId: string = '';
  private readonly movieData$: BehaviorSubject<MovieDetails | null> =
    new BehaviorSubject<MovieDetails | null>(null);

  constructor(
    private moviesService: MoviesService,
    private activatedRoute: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.movieId = this.activatedRoute.snapshot.paramMap.get(
      'movieId'
    ) as string;

    this.moviesService
      .getMovieById(this.movieId)
      .pipe(
        map((movieResponse: MovieDetails) => ({
          ...movieResponse,
          producers: this.joinArray(movieResponse.producers as string[]),
          cinematographers: this.joinArray(
            movieResponse.cinematographers as string[]
          ),
        }))
      )
      .subscribe((movie) => {
        this.movieData$.next({
          ...movie,
        });
      });
  }

  public joinArray(value: string[]): string {
    if (Array.isArray(value)) {
      return value.join(', ');
    }

    return '';
  }

  public get movieDetails(): Observable<MovieDetails | null> {
    return this.movieData$.asObservable();
  }
}
