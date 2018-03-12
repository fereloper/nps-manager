import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NpsresultComponent } from './npsresult.component';

describe('NpsresultComponent', () => {
  let component: NpsresultComponent;
  let fixture: ComponentFixture<NpsresultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NpsresultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NpsresultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
