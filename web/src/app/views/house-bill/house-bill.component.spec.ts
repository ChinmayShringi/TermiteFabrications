import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseBillComponent } from './house-bill.component';

describe('HouseBillComponent', () => {
  let component: HouseBillComponent;
  let fixture: ComponentFixture<HouseBillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HouseBillComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HouseBillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
