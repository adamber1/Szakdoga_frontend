import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgrammepageComponent } from './programmepage.component';

describe('ProgrammepageComponent', () => {
  let component: ProgrammepageComponent;
  let fixture: ComponentFixture<ProgrammepageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgrammepageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgrammepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
