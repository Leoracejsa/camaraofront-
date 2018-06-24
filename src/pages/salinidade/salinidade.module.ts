import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SalinidadePage } from './salinidade';

@NgModule({
  declarations: [
    SalinidadePage,
  ],
  imports: [
    IonicPageModule.forChild(SalinidadePage),
  ],
})
export class SalinidadePageModule {}
