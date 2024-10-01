import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent  implements OnInit {

  menu = {
    logo: 'https://cdn3.iconfinder.com/data/icons/forall/1062/gym-64.png',
    itens: [
      { icone: 'https://cdn0.iconfinder.com/data/icons/evericons-24px-vol-1/24/home-256.png', texto: 'Inicio', link: '/home' }, 
      { icone: 'https://cdn3.iconfinder.com/data/icons/basic-ui-112/52/Icon-About-256.png', texto: 'Sobre', link: '/sobre' }, 
      { icone: 'https://cdn0.iconfinder.com/data/icons/user-interface-line-32/32/interface_picture_draw_galery_snap_copy-256.png', texto: 'Galeria' },
      { icone: 'https://cdn0.iconfinder.com/data/icons/ecommerce-business/24/phone-256.png', texto: 'Contato' }
    ]
  }

  constructor() { }

  ngOnInit() {}

}