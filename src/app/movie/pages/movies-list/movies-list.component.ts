import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import {
  BehaviorSubject,
  combineLatest,
  map,
  Observable,
  startWith,
} from 'rxjs';
import { Movie, Movies } from '../../../core/models/movies';
import { AsyncPipe, NgFor, NgForOf, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FiltersBarComponent } from '../../../shared/components/filters-bar/filters-bar.component';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';
import { SearchCriteria } from '../../../core/models/search';
import { FormatAmountPipe } from '../../../shared/pipes/format-amount.pipe';
import { FormatDurationPipe } from '../../../shared/pipes/format-duration.pipe';

@Component({
  selector: 'app-movies-list',
  standalone: true,
  imports: [
    NgForOf,
    AsyncPipe,
    NgFor,
    NgIf,
    RouterLink,
    FiltersBarComponent,
    ReactiveFormsModule,
    FormatAmountPipe,
    FormatDurationPipe,
  ],
  templateUrl: './movies-list.component.html',
  styleUrl: './movies-list.component.css',
})
export class MoviesListComponent implements OnInit {
  constructor(
    private moviesService: MoviesService,
    private formBuilder: FormBuilder
  ) {}
  private searchCriterias$: any = new BehaviorSubject<any>([]);
  private movies$: BehaviorSubject<Movies> = new BehaviorSubject<Movies>([]);
  public filtersBarForm: FormGroup<{
    title: FormControl<string>;
    release_date: FormControl<string>;
  }> = this.formBuilder.group({
    title: new FormControl<string>('', { nonNullable: true }),
    release_date: new FormControl<string>('', { nonNullable: true }),
  });
  ngOnInit(): void {
    this.moviesService.getMovies().subscribe((movies) => {
      this.movies$.next(movies);
    });
  }

  get movies(): Observable<Movies> {
    return combineLatest([
      this.movies$.asObservable(),
      this.filtersBarForm.valueChanges.pipe(
        startWith({ ...this.filtersBarForm.getRawValue() })
      ),
    ]).pipe(
      map(([movies, criteriasObj]) =>
        movies.filter((movie: Movie) => {
          return Object.keys(criteriasObj).every((key: string) => {
            return String(movie[key as keyof Movie])
              .toLowerCase()
              .includes(
                (criteriasObj as SearchCriteria)[
                  key as keyof SearchCriteria
                ].toLowerCase()
              );
          });
        })
      )
    );
  }

  public handleSearch(criterias: SearchCriteria[]): void {
    this.searchCriterias$.next(criterias);
  }
}
