import { Component, Input, OnInit } from '@angular/core';
import { CaixaDeRemedioService } from '../caixa-de-remedio/caixa-de-remedio.component.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editar-medicamento-modal',
  templateUrl: './editar-medicamento-modal.component.html',
  styleUrls: ['./editar-medicamento-modal.component.scss']
})
export class EditarMedicamentoModalComponent implements OnInit {

  @Input()
  nomeMedicamento: string | any
  @Input()
  novoNomeMedicamento: string | any
  @Input()
  newQuantidade: String | any

  constructor(
    private caixaDeRemedioService: CaixaDeRemedioService,
    private route: ActivatedRoute
    ) {}

    ngOnInit(): void {
      this.novoNomeMedicamento = this.route.snapshot.paramMap.get('nomeMedicamento');
      this.nomeMedicamento = this.route.snapshot.paramMap.get('nomeMedicamento');
      this.newQuantidade = this.route.snapshot.paramMap.get('newQuantidade');
    }

  EditarMedicamento() {
    const index = this.caixaDeRemedioService.obterPorNome(this.nomeMedicamento)

    const medicamentoEditado = this.caixaDeRemedioService.editar(
      index,
      this.novoNomeMedicamento,
      Number(this.newQuantidade)
    );
    // console.log(medicamentoEditado)
    // console.log(this.novoNomeMedicamento)
    // console.log(this.newQuantidade)
  }

  setNome(nome: string) {
    this.novoNomeMedicamento = nome
  }
  setQuantidade(quantidade: String) {
    this.newQuantidade = quantidade
  }
}
