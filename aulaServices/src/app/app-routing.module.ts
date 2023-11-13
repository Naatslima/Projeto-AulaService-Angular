import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router'
import { CaixaDeRemedioComponent } from './caixa-de-remedio/caixa-de-remedio.component';
import { EditarMedicamentoModalComponent } from './editar-medicamento-modal/editar-medicamento-modal.component';

const routes: Routes = [
  {path: '', component: CaixaDeRemedioComponent},
  {path: 'editar/:nomeMedicamento/:newQuantidade', component: EditarMedicamentoModalComponent},
  {path: '**', redirectTo: ''}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
