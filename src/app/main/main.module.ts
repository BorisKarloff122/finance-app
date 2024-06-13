import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from "@angular/material/icon";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MainRoutingModule} from "./main-routing.module";
import {MatButtonModule} from "@angular/material/button";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MainComponent} from "./main.component";
import { ModalContainerComponent } from './components/modal-container/modal-container.component';



@NgModule({
  declarations: [
    MainComponent,
    ModalContainerComponent,
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatToolbarModule,
    MainRoutingModule,
    MatButtonModule,
    MatSidenavModule
  ]
})
export class MainModule { }
