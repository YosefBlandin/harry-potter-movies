import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/movies',
  },
  {
    path: 'movies',
    loadChildren: () =>
      import('./movie/movie.module').then((m) => m.MovieModule),
  },
];
