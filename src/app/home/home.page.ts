import { Component } from '@angular/core';
import { AuthenticateService } from '../services/auth.service';
import { CrudService } from '../services/crud.service';
import { Storage, getDownloadURL, ref, uploadBytesResumable } from '@angular/fire/storage';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {

  segments: string = 'usuarios';


  usuarios = [
    {
    nome: 'Lula Dedástico',
    idade: 80,
    genero: 'masculino',
    rotinas: [
      {
      dia: 'segunda-feira',
      treinos: [
          'Rosca Direita',
          'Crucifixo',
          'Remada Sumô'
        ]
      },    
      {
        dia: 'quarta-feira',
        treinos: [
            'Rosca Direita',
            'Sacrifício',
            'Hit'
          ]
        },
        {
          dia: 'sexta-feira',
          treinos: [
              'Supino Inclinado',
              'Bíceps Corda',
              'Bíceps Hulk Invertido'
            ]
          }        
      
    ]
  },
  {
    nome: 'Seleide Barrigudinha',
    idade: 32,
    genero: 'feminino',
    rotinas: [
      {
      dia: 'terça-feira',
      treinos: [
          'Prancha Redonda',
          'Jumping Bom dia Papai',
          'Flexão de costas'
        ]
      },    
      {
        dia: 'quinta-feira',
        treinos: [
            'Esteira',
            'Agachamento Homem Aranha',
            'Corrida estilo fugitivo da polícia'
          ]
        },
        {
          dia: 'sábado',
          treinos: [
              'Abdominal',
              'Treino com halters',
              'Pulley'
            ]
          }        
      
    ]
  }
  ]

  constructor(){}

  trocar(event: any){
    this.segments = event.detail.value;
  }
}