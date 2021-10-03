import { Component, OnInit } from '@angular/core';

interface Componente{
  icon: string;
  name: string;
  redirecTo: string;
}

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  
  componetes: any[] = [
    {
      icon: 'airplane-sharp',
      name: 'Action Sheet',
      redirecTo: '/action-sheet'
    },
    {
      icon: 'alarma-sharp',
      name: 'Alert Sheet',
      redirecTo: '/alert'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
