import { Component, Input } from '@angular/core';
import { FormatAmountPipe } from '../../pipes/format-amount.pipe';
import { FormatDurationPipe } from '../../pipes/format-duration.pipe';
import { Movie } from '../../../core/models/movies';
import { RouterLink } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-movie-list-element',
  standalone: true,
  imports: [FormatAmountPipe, FormatDurationPipe, RouterLink, NgIf],
  templateUrl: './movie-list-element.component.html',
  styleUrl: './movie-list-element.component.css',
})
export class MovieListElementComponent {
  @Input() movie!: Movie;
}
