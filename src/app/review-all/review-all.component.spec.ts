import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewAllComponent } from './review-all.component';

describe('ReviewAllComponent', () => {
  let component: ReviewAllComponent;
  let fixture: ComponentFixture<ReviewAllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviewAllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
