import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { FormularioComponent } from './componets/formulario/formulario.component';
import { HomeComponent } from './componets/home/home.component';

const routes: Routes = [
  {path: '', component: AppComponent},
  {path: 'formulario', component: FormularioComponent},
  {path: 'home', component: HomeComponent},
  {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
