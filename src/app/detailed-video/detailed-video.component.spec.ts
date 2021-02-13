import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailedVideoComponent } from './detailed-video.component';

describe('DetailedVideoComponent', () => {
  let component: DetailedVideoComponent;
  let fixture: ComponentFixture<DetailedVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailedVideoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailedVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
