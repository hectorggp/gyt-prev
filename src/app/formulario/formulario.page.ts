import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { File } from '@ionic-native/file/ngx';
import { FileTransfer } from '@ionic-native/file-transfer/ngx';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.page.html',
  styleUrls: ['./formulario.page.scss'],
})
export class FormularioPage implements OnInit {
  demoForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private toastController: ToastController,
    private androidPermissions: AndroidPermissions,
    private transfer: FileTransfer,
    private file: File,
  ) {
    this.demoForm = this.formBuilder.group({
      nombre: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      contrasena: ['', [Validators.required, Validators.minLength(6)]],
      sexo: ['', [Validators.required]],
    });
  }

  ngOnInit() {
  }

  async submitForm() {
    console.log(this.demoForm)
    if (this.demoForm.valid) {
      // Envía el formulario al servidor
      const toast = await this.toastController.create({
        message: '¡Formulario enviado con éxito!',
        duration: 2000
      });
      toast.present();

      this.downloadImage('https://pbs.twimg.com/media/E4qoBf7WEAEiZjl.jpg')
    }
  }

  downloadImage(imageUrl: string): void {
    this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.WRITE_EXTERNAL_STORAGE)
      .then((status: any) => {
        if (status.hasPermission) {
          this.downloadAndSaveFile(imageUrl);
        } else {
          this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.WRITE_EXTERNAL_STORAGE)
            .then((status: any) => {
              if (status.hasPermission) {
                this.downloadAndSaveFile(imageUrl);
              }
            });
        }
      });
  }

  downloadAndSaveFile(url: string, fileName: string = 'comprobante-gyt-demo.png'): void {
    const fileTransfer = this.transfer.create();
    const uri = encodeURI(url);
    fileTransfer.download(uri, this.file.externalRootDirectory + '/Download/' + fileName).then(async (entry) => {
      // console.log('download complete: ' + entry.toURL());
      // Do something with the downloaded file
      const toast = await this.toastController.create({
        message: 'Descarga exisosa de ' + fileName,
        duration: 2000
      });
      toast.present();

    }, (error) => {
      console.log('download error: ' + error);
    });
  }
}
