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
  perfil = {
    foto: 'https://wallpapers.com/images/featured/imagens-de-perfil-do-discord-p2o9voc08wbr2cs9.jpg',
    nome: 'Julia Valadão',
    profissao: 'Programadora',
    user: '@juliavaladao',
    idioma: 'Português',
    cidade: 'Tatuí/SP',
    desde: 'desde outubro 2019',
    bio: '👾',
    metricas: {
      curtidas: '12k',
      seguidores: '1k',
      amigos: '800'
    },
    postAmgs: [
      {
        img: 'https://i.pinimg.com/236x/71/f2/13/71f213e01bca74899d502c6287a40057.jpg',
        nome: 'Rocha🍂',
        user: '@sir__rochinha',
        post: 'amo minha mulher'
      },
      {
        img: 'https://i.pinimg.com/736x/14/10/99/1410991d71fc25089950a8dcfd412d48.jpg',
        nome: 'Malu (Taylor`s Version)',
        user: '@the1lovergirl',
        post: 'odeio todos'
      },
      {
        img: 'https://imagens.net.br/wp-content/uploads/2023/08/tristes-imagens-de-perfil-do-whatsapp-para-expressar-sua-tristeza-19.jpg',
        nome: 'du²',
        user: '@edududuuduuu',
        post: 'EU VOU MORRER DE HIPOTERMIAAAAAA'
      }
    ]
  }

}