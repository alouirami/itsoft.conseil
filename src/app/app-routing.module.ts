import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { JuridiqueComponent } from './juridique/juridique.component';
import { ComptabiliteComponent } from './comptabilite/comptabilite.component';
import {RessourceHumaineComponent} from'./ressource-humaine/ressource-humaine.component';
import {ContactComponent} from'./contact/contact.component';
const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'juridique', component:JuridiqueComponent},
  {path:'comptabilite', component:ComptabiliteComponent},
  {path:'ressource-humaine', component:RessourceHumaineComponent},
  {path:'contact', component:ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
