import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  slideOpts = {
    initialSlide: 1,
    speed: 400,
  };

  messages: string[] = []; // Declaración de la propiedad messages

  constructor() {}

  // Otros métodos y lógica de tu componente
}


