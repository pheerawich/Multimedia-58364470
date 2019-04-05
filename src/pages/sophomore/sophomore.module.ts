import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SophomorePage } from './sophomore';

@NgModule({
  declarations: [
    SophomorePage,
  ],
  imports: [
    IonicPageModule.forChild(SophomorePage),
  ],
})
export class SophomorePageModule {}
