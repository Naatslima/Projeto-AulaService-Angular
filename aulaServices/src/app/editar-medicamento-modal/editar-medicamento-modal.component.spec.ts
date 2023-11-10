import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarMedicamentoModalComponent } from './editar-medicamento-modal.component';

describe('EditarMedicamentoModalComponent', () => {
  let component: EditarMedicamentoModalComponent;
  let fixture: ComponentFixture<EditarMedicamentoModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarMedicamentoModalComponent]
    });
    fixture = TestBed.createComponent(EditarMedicamentoModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
