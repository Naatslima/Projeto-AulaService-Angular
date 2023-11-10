import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CaixaDeRemedioComponent } from './caixa-de-remedio/caixa-de-remedio.component';
import { FormsModule } from '@angular/forms';
import { CaixaDeRemedioService } from './caixa-de-remedio/caixa-de-remedio.component.service';
import { EditarMedicamentoModalComponent } from './editar-medicamento-modal/editar-medicamento-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    CaixaDeRemedioComponent,
    EditarMedicamentoModalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
