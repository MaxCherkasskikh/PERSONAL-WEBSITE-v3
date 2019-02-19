import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MypricingComponent } from './mypricing.component';

describe('MypricingComponent', () => {
  let component: MypricingComponent;
  let fixture: ComponentFixture<MypricingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MypricingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MypricingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
