import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent  implements OnInit {

  menu = {
    logo: 'https://cdn2.iconfinder.com/data/icons/valentine-day-16/512/617_chocolate_love_food_sweet_valentine_valentines_day_love-256.png',
    itens: [
      { icone: 'https://cdn0.iconfinder.com/data/icons/evericons-24px-vol-1/24/home-256.png', texto: 'Inicio' }, 
      { icone: 'https://cdn3.iconfinder.com/data/icons/basic-ui-112/52/Icon-About-256.png', texto: 'Sobre' },
      { icone: 'https://cdn0.iconfinder.com/data/icons/user-interface-line-32/32/interface_picture_draw_galery_snap_copy-256.png', texto: 'Galeria' },
      { icone: 'https://cdn0.iconfinder.com/data/icons/ecommerce-business/24/phone-256.png', texto: 'Contato' }
    ]
  }

  constructor() { }

  ngOnInit() {}

}
