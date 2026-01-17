import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Martina } from './martina';

describe('Martina', () => {
  let component: Martina;
  let fixture: ComponentFixture<Martina>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Martina]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Martina);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
