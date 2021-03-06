import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Juego } from 'src/app/model/juego';
import { JuegosService } from 'src/app/services/juegos.service';

@Component({
  selector: 'app-infojuegos',
  templateUrl: './infojuegos.page.html',
  styleUrls: ['./infojuegos.page.scss'],
})
export class InfojuegosPage implements OnInit {

  juego: Juego = {titulo: '', plataforma: '', categoria: '', inicio: '', nota: '', completado: ''};

  constructor(
    private juegosService: JuegosService,
    private router: Router,
    private activatedRoute: ActivatedRoute

  ) { }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id != null) {
      this.juego = this.juegosService.getJuego(+id);
    }
  }

  saveJuego() {
    this.juegosService.saveJuego(this.juego);
    this.router.navigateByUrl('/listajuegos')
  }

}
