import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NpsfooterComponent } from './npsfooter.component';

describe('NpsfooterComponent', () => {
  let component: NpsfooterComponent;
  let fixture: ComponentFixture<NpsfooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NpsfooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NpsfooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
