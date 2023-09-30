import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent {
  
  eventos = [
    { id: 1, local: 'Bodega', data: '10/10/2023', hora: '22:00', descricao: 'ingressos R$ 10,00' },
    { id: 2, local: 'Bodega', data: '10/10/2023', hora: '22:00', descricao: 'ingressos R$ 10,00' },
    { id: 3, local: 'Bodega', data: '10/10/2023', hora: '22:00', descricao: 'ingressos R$ 10,00' },
    { id: 4, local: 'Bodega', data: '10/10/2023', hora: '22:00', descricao: 'ingressos R$ 10,00' },
  ]
  selected_evento = {id:0, local: ''};

  constructor(private api: ApiService, private router: Router) {
    this.getEventos();
  }

  getEventos = () => {
    this.api.getAllEventos().subscribe(
      {
        next: data => {
          this.eventos = data
        },
        error: () => {console.log("Aconteceu um erro")}
      }
    );
  };

  eventoClicked = (evento: any) => {
    this.router.navigate(['eventos-detail', evento.id]);
    
  };

}
