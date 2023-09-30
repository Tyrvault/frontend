import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-eventos-detail',
  templateUrl: './eventos-detail.component.html',
  styleUrls: ['./eventos-detail.component.scss']
})
export class EventosDetailComponent implements OnInit {

  constructor(
    private route: ActivatedRoute, 
    private api: ApiService) { }
    
  selected_evento = { id: '', local: '', data: '', hora: '', descricao: '' };
  selected_id: number | null = null;

  ngOnInit() {
    this.route.paramMap.subscribe((param: ParamMap) => {
      let idStr = param.get('id');

      if (idStr !== null) {
        let id = parseInt(idStr);
        if (!isNaN(id)) {
          this.selected_id = id;
          this.loadEvento(id);
        } else {
          // Trate o caso em que 'idStr' não é um número válido
          console.error('O valor de "id" não é um número válido.');
        }
      } else {
        // Trate o caso em que 'idStr' é nulo
        console.error('O valor de "id" é nulo.');
      }
    });


  }

  loadEvento(id: any) {
    this.api.getEvento(id).subscribe(
      {
        next: data => {
          this.selected_evento = data;
        },
        error: () => { console.log("Aconteceu um erro") }
      }
    );
  };

  // update() {
  //   this.api.updateEvento(this.selected_evento).subscribe(
  //     {
  //       next: (data: any) => {
  //         this.selected_evento = data;
  //         console.log("Evento atualizado com sucesso!");
  //       },
  //       error: (error: any) => {
  //         console.error("Ocorreu um erro ao atualizar o evento:", error);
  //         // Adicione aqui uma lógica para exibir uma mensagem de erro amigável ao usuário
  //       }
  //     }
  //   );
  // }
}


