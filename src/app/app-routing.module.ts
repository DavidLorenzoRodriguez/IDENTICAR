import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { FormularioComponent } from './componets/login/formulario.component';
import { HomeComponent } from './componets/home/home.component';
import { AuthService } from './services/auth.service';
import { IndexComponent } from './componets/index/index.component';
import { CochesComponent } from './componets/cars/coches.component';
import { IdentificarComponent } from './componets/identificar/identificar.component';
import { FichasComponent } from './componets/datasheets/fichas.component';
import { SearchService } from './services/search.service';
import { CocheComponent } from './componets/car/coche.component';
import { GrupoComponent } from './componets/group/grupo.component';

const routes: Routes = [
  {path: '', component: IndexComponent},
  {path: 'index', component: IndexComponent},
  {path: 'formulario', component: FormularioComponent},
  {path: 'home', component: HomeComponent},
  {path: 'auth', component: AuthService},
  {path: 'search', component: SearchService},
  {path: 'coche', component: CocheComponent},
  {path: 'coches', component: CochesComponent},
  {path: 'identificar', component: IdentificarComponent},
  {path: 'fichas', component: FichasComponent},
  {path: 'grupo', component: GrupoComponent},
  {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
