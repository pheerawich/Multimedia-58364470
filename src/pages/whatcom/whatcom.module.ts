import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WhatcomPage } from './whatcom';

@NgModule({
  declarations: [
    WhatcomPage,
  ],
  imports: [
    IonicPageModule.forChild(WhatcomPage),
  ],
})
export class WhatcomPageModule {}
