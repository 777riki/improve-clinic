import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Andrea } from './andrea';

describe('Andrea', () => {
  let component: Andrea;
  let fixture: ComponentFixture<Andrea>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Andrea]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Andrea);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
