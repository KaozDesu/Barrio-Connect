import { NgModule } from '@angular/core';
import { EnvironmentProviders, makeEnvironmentProviders } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { RegistroEmpresaComponent } from './registro-empresa/registro-empresa.component'; // Nuevo
import { ListaNegociosComponent } from './lista-negocios/lista-negocios.component'; // Nuevo

import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { environment } from '../environments/environment';

const firebaseProviders = makeEnvironmentProviders([
  provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
  provideAuth(() => getAuth()),
  provideFirestore(() => getFirestore())
]);

@NgModule({
  declarations: [AppComponent, RegistroEmpresaComponent, ListaNegociosComponent], // Agrega los nuevos componentes
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    firebaseProviders
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}