import { Component, OnInit} from '@angular/core';
import { CaixaDeRemedioService } from './caixa-de-remedio.component.service';
import { IcaixaDeMedicamento } from '../Model/IcaixaDeMedicamento';
import { FormGroup } from '@angular/forms';
import { EditarMedicamentoModalComponent } from '../editar-medicamento-modal/editar-medicamento-modal.component';

@Component({
  selector: 'app-caixa-de-remedio',
  templateUrl: './caixa-de-remedio.component.html',
  styleUrls: ['./caixa-de-remedio.component.scss']
})

  // export class CaixaDeRemedioComponent implements OnInit {
  //   medicamento: Medicamento[] = [];
  //   medicamentoForm: FormGroup;
  // }

export class CaixaDeRemedioComponent {
  medicamento!: String;
  listaMedicamento!: IcaixaDeMedicamento[]; 
  quantidade!: number;
  
  nomeMedicamentoEditar: String="polaramine";
  quantiaEditar: String="2";
  nomeMedicamentoAtual: String="";

  constructor(private caixaDeRemedioService: CaixaDeRemedioService) {
    this.listaMedicamento = this.caixaDeRemedioService.medicamento
  }

  adicionarNovoMedicamento(): void {
    this.caixaDeRemedioService.adicionar(this.medicamento, this.quantidade)
  }
  excluirMedicamento(index: number): void {
    this.caixaDeRemedioService.excluir(index)
  }
  
  chamarEditar(medicamentoSelecionado: String, quantidadeSelecionada: number) {
    this.nomeMedicamentoEditar = medicamentoSelecionado;
    this.quantiaEditar = quantidadeSelecionada.toString();
  }
}

// editarMedicamento(index: number): void {
//   this.caixaDeRemedioService.editar(index)
// }

// editarMedicamento(index: number) {
//   const novoNome = prompt('Novo medicamento: ');
//   const novaQuantidade = prompt('Nova quantidade de medicamento: ');

//   this.caixaDeRemedioService.editar(index, novoNome, novaQuantidade);
// }