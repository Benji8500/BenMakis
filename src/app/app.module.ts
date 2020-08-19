import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { TestComponent } from './components/test.component';
import {FormsModule} from '@angular/forms';
import { PersonaComponent } from '../modules/persona/components/persona/persona.component';
import { Test2Component } from './test2/test2.component';


@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    PersonaComponent,
    Test2Component
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
