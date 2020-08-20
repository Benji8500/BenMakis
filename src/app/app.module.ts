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
import { TestPipe } from './pipes/test.pipe';
import { ExpoPipe } from './pipes/expo.pipe';
import { PurePipe } from './pipes/pure.pipe';
import { ImpurePipe } from './pipes/impure.pipe';
import { NgColorDirective } from './directives/ng-color.directive';




@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    Test2Component,
    TestPipe,
    ExpoPipe,
    PurePipe,
    ImpurePipe,
    NgColorDirective,


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
