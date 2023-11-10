import { IcaixaDeMedicamento } from "../Model/IcaixaDeMedicamento";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn:'root'
})

export class CaixaDeRemedioService {
    //medicamento = ["Dipirona", "Dramin", "Amoxilina"];
    medicamento:IcaixaDeMedicamento[] = [{
        // id: 1,
        nome: "Dipirona", 
        quantidade: 2
    },
    {
        // id: 2,
        nome: "Dorflex",
        quantidade: 5
    }
];
    adicionar(nomeRecebido: String, quantidadeRecebida: number): void {
        const novoMedicamento = {
            // id: this.medicamento.length + 1,
            nome: nomeRecebido,
            quantidade: quantidadeRecebida
        }
        this.medicamento.push(novoMedicamento)    
    }
    excluir(index: number): void {
        this.medicamento.splice(index,1)
    }

    editar(medicamento: IcaixaDeMedicamento, nomeRecebido: String, quantidadeRecebida: number): void {
        
            medicamento.nome = nomeRecebido,
            medicamento.quantidade = quantidadeRecebida
        }
    }

    // editar(index: number): void {
    //     this.medicamento.slice(index)
    // }

    // editar(index: number, novoNome: String, novaQuantidade: number) {
    //     if (index >= 0 && index < this.medicamento.length) {
    //         this.medicamento[index].nome = novoNome;
    //         this.medicamento[index].quantidade = novaQuantidade;

    //         console.log('Medicamento editado: ',this.medicamento[index]);
    //     }
    // }

    // obterPorId(id: number): IcaixaDeMedicamento {
    //     return this.medicamento.find(medicamento => medicamento.id === id);
    // }

    // editar(nome: String, quantidade: number): void {
        
    // }
