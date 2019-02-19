import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyotherinterestsComponent } from './myotherinterests.component';

describe('MyotherinterestsComponent', () => {
  let component: MyotherinterestsComponent;
  let fixture: ComponentFixture<MyotherinterestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyotherinterestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyotherinterestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
