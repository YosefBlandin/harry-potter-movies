import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { provideRouter } from '@angular/router';
import { movieRoutes } from './movie.routes';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [provideRouter(movieRoutes)],
})
export class MovieModule {}
