import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListConseilsComponent } from './list-conseils.component';

describe('ListConseilsComponent', () => {
  let component: ListConseilsComponent;
  let fixture: ComponentFixture<ListConseilsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListConseilsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListConseilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
