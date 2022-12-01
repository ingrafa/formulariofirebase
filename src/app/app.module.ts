
import { BrowserModule } from '@angular/platform-browser';
import { CrearProductosComponent } from './pages/productos/crear-productos/crear-productos.component';
import { ListarProductosComponent } from './pages/productos/listar-productos/listar-productos.component';
import { HeaderModule } from './shared/components/header/header.module';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { environment } from './../environments/environment';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';


@NgModule({
  declarations: [
    AppComponent,
    CrearProductosComponent,
    ListarProductosComponent,
    HeaderComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig)

  ],

  providers: [AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule { }

