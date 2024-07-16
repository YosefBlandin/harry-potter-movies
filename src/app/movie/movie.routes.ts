import { Routes } from '@angular/router';
import { MoviesListComponent } from './pages/movies-list/movies-list.component';
import { MovieDetailsComponent } from './pages/movie-details/movie-details.component';

export const movieRoutes: Routes = [
  {
    path: '',
    component: MoviesListComponent,
  },
  {
    path: ':movieId',
    component: MovieDetailsComponent,
  },
];
