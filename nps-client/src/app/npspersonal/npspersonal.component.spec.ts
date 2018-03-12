import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NpspersonalComponent } from './npspersonal.component';

describe('NpspersonalComponent', () => {
  let component: NpspersonalComponent;
  let fixture: ComponentFixture<NpspersonalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NpspersonalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NpspersonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
