import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EarlyMathComponent } from './early-math.component';

describe('EarlyMathComponent', () => {
  let component: EarlyMathComponent;
  let fixture: ComponentFixture<EarlyMathComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EarlyMathComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EarlyMathComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
