import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Simone } from './simone';

describe('Simone', () => {
  let component: Simone;
  let fixture: ComponentFixture<Simone>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Simone]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Simone);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
