import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login/login.component';
import {NgElseDirective} from '../directives/ng-else.directive';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
      LoginComponent,
      NgElseDirective],
  imports: [
    CommonModule,
    LoginRoutingModule,
    FormsModule,
      ReactiveFormsModule

  ]
})
export class LoginModule { }
