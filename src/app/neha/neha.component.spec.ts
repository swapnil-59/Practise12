import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NehaComponent } from './neha.component';

describe('NehaComponent', () => {
  let component: NehaComponent;
  let fixture: ComponentFixture<NehaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NehaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NehaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
