import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  //MOCK
  user: any = {
    nome: 'geisha abreu  soares de pina',
    unidade: {
      id: 5,
      nome: 'hospital mv',
      tipo: 'matriz (consolidadora)',
    },
  };

  constructor() {}

  getDadosUsuario() {
    return this.user;
  }
}
