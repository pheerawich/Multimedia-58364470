import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CombasicPage } from './combasic';

@NgModule({
  declarations: [
    CombasicPage,
  ],
  imports: [
    IonicPageModule.forChild(CombasicPage),
  ],
})
export class CombasicPageModule {}
