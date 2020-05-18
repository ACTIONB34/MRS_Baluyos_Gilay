import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NowshowingComponent } from './nowshowing.component';

describe('NowshowingComponent', () => {
  let component: NowshowingComponent;
  let fixture: ComponentFixture<NowshowingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NowshowingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NowshowingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
