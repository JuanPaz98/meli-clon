import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselPromotionsComponent } from './carousel-promotions.component';

describe('CarouselComponent', () => {
  let component: CarouselPromotionsComponent;
  let fixture: ComponentFixture<CarouselPromotionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarouselPromotionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselPromotionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
