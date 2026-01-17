import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Matteo } from './matteo';

describe('Matteo', () => {
  let component: Matteo;
  let fixture: ComponentFixture<Matteo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Matteo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Matteo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
