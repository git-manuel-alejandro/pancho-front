import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicoPersonaComponent } from './basico-persona.component';

describe('BasicoPersonaComponent', () => {
  let component: BasicoPersonaComponent;
  let fixture: ComponentFixture<BasicoPersonaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicoPersonaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicoPersonaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
