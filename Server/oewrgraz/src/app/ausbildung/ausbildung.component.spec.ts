import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AusbildungComponent } from './ausbildung.component';

describe('AusbildungComponent', () => {
  let component: AusbildungComponent;
  let fixture: ComponentFixture<AusbildungComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AusbildungComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AusbildungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
