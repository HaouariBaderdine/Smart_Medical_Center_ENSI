import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CantacterComponent } from './cantacter.component';

describe('CantacterComponent', () => {
  let component: CantacterComponent;
  let fixture: ComponentFixture<CantacterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CantacterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CantacterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
