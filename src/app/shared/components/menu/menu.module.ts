import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu.component';
import { RouterLink } from '@angular/router';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [MenuComponent],
  imports: [
    CommonModule,
    RouterLink,
    IonicModule
  ]
})
export class MenuModule { }
