import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeerjsonComponent } from './leerjson.component';

describe('LeerjsonComponent', () => {
  let component: LeerjsonComponent;
  let fixture: ComponentFixture<LeerjsonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeerjsonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeerjsonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
