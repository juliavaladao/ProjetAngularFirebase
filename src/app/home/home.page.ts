import { Component } from '@angular/core';
import { AuthenticateService } from '../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  user: any = {
    email: null,
    password: null
  }

  constructor( public authService: AuthenticateService ){
    
  }

  acessar (){
    this.authService.login(this.user.email, this.user.password);
  }
}