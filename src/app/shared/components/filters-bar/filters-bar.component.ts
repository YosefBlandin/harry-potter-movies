import { NgFor, NgForOf } from '@angular/common';
import {
  Component,
  EventEmitter,
  inject,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import {
  ControlContainer,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-filters-bar',
  standalone: true,
  imports: [ReactiveFormsModule, NgFor, NgForOf],
  templateUrl: './filters-bar.component.html',
  styleUrl: './filters-bar.component.css',
  viewProviders: [
    {
      provide: ControlContainer,
      useFactory: () => inject(ControlContainer, { skipSelf: true }),
    },
  ],
})
export class FiltersBarComponent {
  public formControlContainer!: ControlContainer;

  constructor() {}

  get parentForm(): FormGroup {
    return this.formControlContainer.control as FormGroup;
  }
}
