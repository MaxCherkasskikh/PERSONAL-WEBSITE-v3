import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MycodingtutorialsComponent } from './mycodingtutorials.component';

describe('MycodingtutorialsComponent', () => {
  let component: MycodingtutorialsComponent;
  let fixture: ComponentFixture<MycodingtutorialsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MycodingtutorialsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MycodingtutorialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
