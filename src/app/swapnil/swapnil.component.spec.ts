import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwapnilComponent } from './swapnil.component';

describe('SwapnilComponent', () => {
  let component: SwapnilComponent;
  let fixture: ComponentFixture<SwapnilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwapnilComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SwapnilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
