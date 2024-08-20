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
  ];

  treinos = [
    {
      nome: 'Pulley',
      nivel: 1,
      series: 2,
      repeticoes: 10,
      foto: 'https://www.mundoboaforma.com.br/wp-content/uploads/2021/07/triceps-puxada-no-pulley.gif'
    },
    {
      nome: 'Agachamento Sumô (com peso)',
      nivel: 2,
      series: 3,
      repeticoes: 15,
      foto: 'https://www.hipertrofia.org/blog/wp-content/uploads/2024/02/agachamento-sumo.gif'
    },
    {
      nome: 'Supino Reto',
      nivel: 3,
      series: 3,
      repeticoes: 10,
      foto: 'https://www.mundoboaforma.com.br/wp-content/uploads/2020/12/supino-reto.gif'
    },
    {
      nome: 'Remada Unilateral',
      nivel: 3,
      series: 3,
      repeticoes: 12,
      foto: 'https://static.wixstatic.com/media/2edbed_cf8feb6f79494833b887104bc358843d~mv2.gif'
    },
    {
      nome: 'Levantamento Terra',
      nivel: 2,
      series: 5,
      repeticoes: 15,
      foto: 'https://www.hipertrofia.org/blog/wp-content/uploads/2017/11/barbell-deadlift.gif'
    },
    {
      nome: 'Flexão de Braços',
      nivel: 1,
      series: 3,
      repeticoes: 10,
      foto: 'https://www.mundoboaforma.com.br/wp-content/uploads/2021/04/flexao-de-bracos.gif'
    },
    {
      nome: 'Cadeira Abdutora',
      nivel: 1,
      series: 3,
      repeticoes: 10,
      foto: 'https://www.mundoboaforma.com.br/wp-content/uploads/2021/04/pernas-abducao-de-pernas-na-maquina.gif'
    },
    {
      nome: 'Rosca Direta',
      nivel: 2,
      series: 4,
      repeticoes: 10,
      foto: 'https://www.mundoboaforma.com.br/wp-content/uploads/2020/12/rosca-direta-com-barra-e-pegada-fechada.gif'
    },
    {
      nome: 'Prancha',
      nivel: 3,
      series: 2,
      repeticoes: '5min',
      foto: 'https://www.mundoboaforma.com.br/wp-content/uploads/2020/12/prancha-com-elevacao-das-pernas-prancha-aranha.gif'
    },
    {
      nome: 'Extensão de Tríceps na Polia',
      nivel: 2,
      series: 3,
      repeticoes: 8,
      foto: 'https://www.mundoboaforma.com.br/wp-content/uploads/2021/07/triceps-no-pulley-atras-ca-cabeca.gif'
    }
  ];

  constructor(){}

  trocar(event: any){
    this.segments = event.detail.value;
  }
}