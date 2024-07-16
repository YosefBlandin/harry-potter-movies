import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieListElementComponent } from './movie-list-element.component';

describe('MovieListElementComponent', () => {
  let component: MovieListElementComponent;
  let fixture: ComponentFixture<MovieListElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MovieListElementComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MovieListElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
