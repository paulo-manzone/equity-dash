import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcoesDaBolsaComponent } from './acoes-da-bolsa.component';

describe('AcoesDaBolsaComponent', () => {
  let component: AcoesDaBolsaComponent;
  let fixture: ComponentFixture<AcoesDaBolsaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcoesDaBolsaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcoesDaBolsaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
