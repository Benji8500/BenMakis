import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { TestComponent } from './components/test.component';
import {FormsModule} from '@angular/forms';
import { Test2Component } from './test2/test2.component';
import {PersonaModule} from './modules/persona/persona.module';
import {ProductoModule} from './modules/producto/producto.module';
import {AdminModule} from './modules/admin/admin.module';
import {UserModule} from './modules/user/user.module';




@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    Test2Component,


  ],
  imports: [
    BrowserModule,
    FormsModule,
    PersonaModule,
    ProductoModule,
    AdminModule,
    UserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
