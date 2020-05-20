import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paciente',
  templateUrl: './paciente.component.html',
  styleUrls: ['./paciente.component.scss'],
})
export class PacienteComponent implements OnInit {
  pacienteMock = {
    nome: 'Everardo Jose Marchezini',
    sexo: 'masculino',
    idade: 49,
    convenio: 'BRADESCO / MV SAUDE',
    especialidade: 'CARDIOLOGIA',
    ala: 'INTERNACAO - 0002',
    local: 'APT 602',
  };

  constructor() {}

  ngOnInit(): void {}
}
