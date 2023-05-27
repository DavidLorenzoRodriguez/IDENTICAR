import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CochesComponent } from './componets/coches/coches.component';
import { CocheComponent } from './componets/coche/coche.component';
import { FormularioComponent } from './componets/formulario/formulario.component';
import { LateralComponent } from './componets/lateral/lateral.component';
import { BarraComponent } from './componets/barra/barra.component';
import { InterpolacionComponent } from './componets/interpolacion/interpolacion.component';
import { HomeComponent } from './componets/home/home.component';

@NgModule({
  declarations: [
    AppComponent,

    CochesComponent,
    CocheComponent,
    FormularioComponent,
    LateralComponent,
    BarraComponent,
    InterpolacionComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
