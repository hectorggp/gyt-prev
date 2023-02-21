import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { BiometricoPage } from './biometrico.page';
import { FingerprintAIO } from '@ionic-native/fingerprint-aio/ngx';
import { IonicNativePlugin } from '@ionic-native/core';

const routes: Routes = [
  {
    path: '',
    component: BiometricoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  providers: [
    FingerprintAIO,
    IonicNativePlugin
  ],
  declarations: [BiometricoPage]
})
export class BiometricoPageModule {}
