import { Component, OnInit } from '@angular/core';
import { FingerprintAIO } from '@ionic-native/fingerprint-aio/ngx';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-biometrico',
  templateUrl: './biometrico.page.html',
  styleUrls: ['./biometrico.page.scss'],
})
export class BiometricoPage implements OnInit {

  constructor(private faio: FingerprintAIO, public toastController: ToastController) { }

  ngOnInit() {
  }

  showFingerprintScanner() {
    this.faio.show({
      description: 'Escanea tu huella para continuar',
      fallbackButtonTitle: 'Usar contraseña',
      disableBackup: true,
    })
    .then((result: any) => this.mostrarToast())
    .catch((error: any) => console.log(error));
  }

  async mostrarToast() {
    const toast = await this.toastController.create({
      message: 'Autenticación correcta',
      duration: 2000
    });
    toast.present();
  }
}
