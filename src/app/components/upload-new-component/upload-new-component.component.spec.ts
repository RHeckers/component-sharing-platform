import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadNewComponentComponent } from './upload-new-component.component';

describe('UploadNewComponentComponent', () => {
  let component: UploadNewComponentComponent;
  let fixture: ComponentFixture<UploadNewComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadNewComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadNewComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
