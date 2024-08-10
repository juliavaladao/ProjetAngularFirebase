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
  pessoa = {
    nome: 'Papai Smurf',
    foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7zpM06RygbeSXHnrVk3cQTPVBushprWqUcc3S0IDHTfPDKzO_J20_MGH1LpeTutmlKhE&usqp=CAU',
    objetivo: 'Doutorado em Quimica',
    contato: {
      email:'daddy@gmail.com',
      telefone:'(21)96904-4469',
      linkedin: 'linkedin.com/smurfPapai'
    },
    softskill: ['Dominío de poções', 'Smurfês: fluente', 'Mestre do onlyfans', 'Atendimento ao cliente'],
    formacao: [
      {
        ano_inicio:'300 a.C',
        ano_termino:'40',
        instituicao:'Vila Mágica',
        curso:'Poções e Magia natural'
      },
      {
        ano_inicio:'2020',
        ano_termino:'2023',
        instituicao:'Universidade Federal Pipokinha',
        curso:'Majistério em putaria'
      },
    ]
  }
  constructor(){ }
}
