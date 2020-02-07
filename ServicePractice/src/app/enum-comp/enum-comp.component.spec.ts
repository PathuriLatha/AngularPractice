import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnumCompComponent } from './enum-comp.component';

describe('EnumCompComponent', () => {
  let component: EnumCompComponent;
  let fixture: ComponentFixture<EnumCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnumCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnumCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
