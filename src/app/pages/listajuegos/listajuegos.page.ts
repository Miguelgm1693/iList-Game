import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Juego } from 'src/app/model/juego';
import { JuegosService } from 'src/app/services/juegos.service';

@Component({
  selector: 'app-listajuegos',
  templateUrl: './listajuegos.page.html',
  styleUrls: ['./listajuegos.page.scss'],
})
export class ListajuegosPage implements OnInit {

  juegos: Juego[];


  constructor(
    private juegosService: JuegosService,
    private router: Router,
    private alertController: AlertController,

  ) { }

  ngOnInit() { }

  goInfoJuegos(id:number) {
    this.router.navigateByUrl("/infojuegos/"+id)
    
  }

  goEditJuegos(id: number) {
    this.router.navigateByUrl(`/editjuegos${id != undefined ? '/' + id : ''}`)
  }

  deleteJuegos(id: number) {
    this.juegosService.deleteJuego(id);
  }

  async presentAlertConfirm(j: Juego) {
    console.log('alerta');
    const alert = await this.alertController.create({
      header: 'Borrar tarea',
      message: `¿Estás seguro que quieres borrar <strong> ${j.titulo}</strong>?`,
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
        }, {
          text: 'Aceptar',
          handler: () => {
            this.deleteJuegos(j.id);
          }
        }
      ]
    });

    await alert.present();
  }



}
