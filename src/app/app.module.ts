import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { JuridiqueComponent } from './juridique/juridique.component';
import { ComptabiliteComponent } from './comptabilite/comptabilite.component';
import { RessourceHumaineComponent } from './ressource-humaine/ressource-humaine.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    JuridiqueComponent,
    ComptabiliteComponent,
    RessourceHumaineComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
