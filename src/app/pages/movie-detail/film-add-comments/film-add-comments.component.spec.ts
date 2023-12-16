import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmAddCommentsComponent } from './film-add-comments.component';

describe('FilmAddCommentsComponent', () => {
  let component: FilmAddCommentsComponent;
  let fixture: ComponentFixture<FilmAddCommentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilmAddCommentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilmAddCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
