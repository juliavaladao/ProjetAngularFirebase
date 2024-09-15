import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  treino = [
    {
      nome: 'Braço',
      img1: 'https://blog.gsuplementos.com.br/wp-content/uploads/2020/07/original-081147747ee021b77b3d6b993997e9f2-scaled.jpeg',
      img2: 'https://p2.trrsf.com/image/fget/cf/1200/630/middle/images.terra.com/2022/03/12/2015765037-treino-de-braco-1.jpg'
    },
    {
      nome: 'Peito',
      img1: 'https://static.tuasaude.com/media/article/qw/fa/treino-de-peito-em-casa-com-halteres_53293_l.jpg',
      img2: 'https://www.hipertrofia.org/blog/wp-content/uploads/2017/12/peckdeck1.jpg'
    },
    {
      nome: 'Costas',
      img1: 'https://static.tuasaude.com/media/article/pb/gk/treino-costas_39685_l.jpg',
      img2: 'https://www.elhombre.com.br/wp-content/uploads/2023/05/AG_00078-1400x933.jpg'
    },
    {
      nome: 'Pernas',
      img1: 'https://treinomestre.com.br/wp-content/uploads/2014/10/treino-de-pernas-para-iniciantes-1.jpg',
      img2: 'https://i0.wp.com/gustavomartinspersonal.com.br/wp-content/uploads/2018/02/dividir-o-treino-de-perna-1024x576.jpg'
    }
  ]

  constructor(){ }
}
