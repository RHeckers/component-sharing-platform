import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainControllesComponent } from './main-controlles.component';

describe('MainControllesComponent', () => {
  let component: MainControllesComponent;
  let fixture: ComponentFixture<MainControllesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainControllesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainControllesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
