import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TanquesPage } from './tanques';

@NgModule({
  declarations: [
    TanquesPage,
  ],
  imports: [
    IonicPageModule.forChild(TanquesPage),
  ],
})
export class TanquesPageModule {}
