import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroNoticia } from './cadastro-noticia';

describe('CadastroNoticia', () => {
  let component: CadastroNoticia;
  let fixture: ComponentFixture<CadastroNoticia>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CadastroNoticia],
    }).compileComponents();

    fixture = TestBed.createComponent(CadastroNoticia);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
