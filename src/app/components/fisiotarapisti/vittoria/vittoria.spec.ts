import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Vittoria } from './vittoria';

describe('Vittoria', () => {
  let component: Vittoria;
  let fixture: ComponentFixture<Vittoria>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Vittoria]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Vittoria);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
