import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarNoticia } from './editar-noticia';

describe('EditarNoticia', () => {
  let component: EditarNoticia;
  let fixture: ComponentFixture<EditarNoticia>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditarNoticia],
    }).compileComponents();

    fixture = TestBed.createComponent(EditarNoticia);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
