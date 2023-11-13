import { IcaixaDeMedicamento } from "../Model/IcaixaDeMedicamento";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn:'root'
})

export class CaixaDeRemedioService {
    medicamento:IcaixaDeMedicamento[] = [{
        nome: "Dipirona",
        quantidade: 2
    },
    {
        nome: "Dorflex",
        quantidade: 5
    }
];
    adicionar(nomeRecebido: string, quantidadeRecebida: number): void {
        const novoMedicamento = {
            nome: nomeRecebido,
            quantidade: quantidadeRecebida
        }
        this.medicamento.push(novoMedicamento)
    }

    excluir(index: number): void {
        this.medicamento.splice(index,1)
    }

    editar(index: number, nomeRecebido: string, quantidadeRecebida: number): IcaixaDeMedicamento | null {
        if (index >= 0 && index < this.medicamento.length) {
          const medicamentoEditado = { ...this.medicamento[index], nome: nomeRecebido, quantidade: quantidadeRecebida };
          this.medicamento[index] = medicamentoEditado;
          return medicamentoEditado;
        }
        return null;
      }

      obterPorNome(nome: String): number  {
        return this.medicamento.findIndex(medicamento => medicamento.nome === nome);
      }
    }
