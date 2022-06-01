import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarAscensosComponent } from './listar-ascensos.component';

describe('ListarAscensosComponent', () => {
  let component: ListarAscensosComponent;
  let fixture: ComponentFixture<ListarAscensosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarAscensosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarAscensosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
