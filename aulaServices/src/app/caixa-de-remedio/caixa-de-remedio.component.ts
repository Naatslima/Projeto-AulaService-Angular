import { Component } from '@angular/core';
import { CaixaDeRemedioService } from './caixa-de-remedio.component.service';
import { IcaixaDeMedicamento } from '../Model/IcaixaDeMedicamento';

@Component({
  selector: 'app-caixa-de-remedio',
  templateUrl: './caixa-de-remedio.component.html',
  styleUrls: ['./caixa-de-remedio.component.scss']
})

export class CaixaDeRemedioComponent {
  medicamento!: string;
  listaMedicamento!: IcaixaDeMedicamento[];
  quantidade!: number;

  nomeMedicamentoEditar: String="";
  quantiaEditar: String="";
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

  chamarEditar(index: number) {
    const medicamentoSelecionado: IcaixaDeMedicamento | any = this.listaMedicamento.find((medicamento, i) => i == index);
    this.nomeMedicamentoEditar = medicamentoSelecionado.nome;
    this.quantiaEditar = medicamentoSelecionado.quantidade.toString();
    //console.log(medicamentoSelecionado);
  }
}
