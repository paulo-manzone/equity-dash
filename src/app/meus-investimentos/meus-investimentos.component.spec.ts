import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeusInvestimentosComponent } from './meus-investimentos.component';

describe('MeusInvestimentosComponent', () => {
  let component: MeusInvestimentosComponent;
  let fixture: ComponentFixture<MeusInvestimentosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeusInvestimentosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeusInvestimentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
