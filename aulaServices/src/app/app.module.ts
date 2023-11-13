import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CaixaDeRemedioComponent } from './caixa-de-remedio/caixa-de-remedio.component';
import { FormsModule } from '@angular/forms';
import { EditarMedicamentoModalComponent } from './editar-medicamento-modal/editar-medicamento-modal.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    CaixaDeRemedioComponent,
    EditarMedicamentoModalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
