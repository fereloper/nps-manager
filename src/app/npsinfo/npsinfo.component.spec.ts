import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NpsinfoComponent } from './npsinfo.component';

describe('NpsinfoComponent', () => {
  let component: NpsinfoComponent;
  let fixture: ComponentFixture<NpsinfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NpsinfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NpsinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
