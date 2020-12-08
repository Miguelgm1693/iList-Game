import { Injectable } from '@angular/core';
import { Juego } from '../model/juego';
import { Plugins } from '@capacitor/core';
const { Storage } = Plugins;

@Injectable({
  providedIn: 'root'
})
export class JuegosService {

  juegos: Juego[] = [];
  juegoCounter:number = 0;

  constructor() { 
    this.getJuegosFromStorage().then(
      data => this.juegos = data
    );

    this.getJuegoCounterFromStorage().then(
      data => this.juegoCounter = data
    );
  }

  public getJuegos(): Juego[] {
    return this.juegos;
  }

  public getJuego(id:number) {
    return {...this.juegos.filter(j => j.id === id)[0]}
  }

  public async getJuegosFromStorage(): Promise<Juego[]> {
    const ret = await Storage.get({ key: 'juegos' });
    return JSON.parse(ret.value) ? JSON.parse(ret.value) : [];
  }

  public async getJuegoCounterFromStorage(): Promise<number> {
    const { value } = await Storage.get({ key: 'juegoCounter' });
    return value ? +value : 0;
  }

  public async saveJuego(j: Juego) {

    if (j.id == undefined) { // tarea nueva
      j.id = this.juegoCounter++;
      this.juegos.push(j);
    } else { // edición de una tarea existente
      this.juegos = this.juegos.filter(ju => ju.id != j.id);
      this.juegos.push(j);
    }

    await this.saveJuegos(this.juegos);
    await this.saveJuegoCounter(this.juegoCounter);
  }

  public async saveJuegos(juegos: Juego[]) {
    await Storage.set({
      key: 'juegos',
      value: JSON.stringify(juegos)
    });
  }

  public async saveJuegoCounter(ju: number) {
    await Storage.set({
      key: 'juegoCounter',
      value: '' + ju
    });
  }

  public async deleteJuego(id: number) {
    this.juegos = this.juegos.filter(t => t.id != id);
    await this.saveJuegos(this.juegos);
  }
  
}


