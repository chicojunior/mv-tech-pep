import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-soap',
  templateUrl: './soap.component.html',
  styleUrls: ['./soap.component.scss'],
})
export class SoapComponent implements OnInit {
  criticidades = [
    { valor: 'baixo', view: 'Baixo Risco' },
    { valor: 'medio', view: 'Médio Risco' },
    { valor: 'alto', view: 'Alto Risco' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
