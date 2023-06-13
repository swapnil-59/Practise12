import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SonawaneComponent } from './sonawane.component';

describe('SonawaneComponent', () => {
  let component: SonawaneComponent;
  let fixture: ComponentFixture<SonawaneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SonawaneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SonawaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
