import { Component, Input } from '@angular/core';
import { IcaixaDeMedicamento } from '../Model/IcaixaDeMedicamento';
//import { FormBuilder, FormGroup, Validators } from '@angular/forms';
//import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-editar-medicamento-modal',
  templateUrl: './editar-medicamento-modal.component.html',
  styleUrls: ['./editar-medicamento-modal.component.scss']
})
export class EditarMedicamentoModalComponent {
  @Input() medicamento!: IcaixaDeMedicamento;      

  @Input()
  nomeMedicamento: String="";
  @Input()
  novoNomeMedicamento: String="";
  @Input()
  newQuantidade: String="";   

  // formulario: FormGroup;

  // constructor(
 //   public activeModal: NgbActiveModal,
  //   private fb: FormBuilder
  // ) {
  //   this.formulario = this.fb.group({
  //     novoNomeMedicamento: ['', Validators.required],
  //     newQuantidade: ['', [Validators.required, Validators.min(0)]],
  //   })
  // } 
//   if (this.medicamento) {
//     this.formulario.setValue ({
//       novoNome: this.medicamento.nome,
//       novaQuantidade: this.medicamento.quantidade,
//     });
//   }
// }
  
//   salvarEdicao() {
//     const novoNome = this.formulario.get('novoNome').value;
//     const novaQuantidade = this.formulario.get('novaQuantidade').value;
    
//     this.activeModal.close({ novoNome, novaQuantidade });
//   }
  
}