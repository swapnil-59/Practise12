import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RautComponent } from './raut.component';

describe('RautComponent', () => {
  let component: RautComponent;
  let fixture: ComponentFixture<RautComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RautComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RautComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
