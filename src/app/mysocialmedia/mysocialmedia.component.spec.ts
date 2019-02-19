import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MysocialmediaComponent } from './mysocialmedia.component';

describe('MysocialmediaComponent', () => {
  let component: MysocialmediaComponent;
  let fixture: ComponentFixture<MysocialmediaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MysocialmediaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MysocialmediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
