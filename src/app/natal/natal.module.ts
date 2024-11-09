import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NatalPageRoutingModule } from './natal-routing.module';

import { NatalPage } from './natal.page';
import { MenuModule } from '../shared/components/menu/menu.module';
import { FooterModule } from '../shared/components/footer/footer.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NatalPageRoutingModule,
    MenuModule,
    FooterModule
  ],
  declarations: [NatalPage]
})
export class NatalPageModule {}
