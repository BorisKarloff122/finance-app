import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';

import {LoginRoutingModule} from "./login-routing.module";
import {LoginComponent} from "./components/login.component";
import {SharedFormsModule} from "../shared/modules/forms/SharedForms.module";
import {ParallaxItemDirective} from "../shared/modules/ui/directives/parallax-item.directive";

@NgModule({
  declarations: [
    LoginComponent,
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    SharedFormsModule,
    ParallaxItemDirective,
  ]
})
export class LoginModule { }
