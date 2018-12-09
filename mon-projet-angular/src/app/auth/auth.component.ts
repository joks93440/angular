import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  auhtStatus: boolean;
  constructor(private authService: AuthService) {}


  ngOnInit() {
    this.auhtStatus = this.authService.isAuth;
  }

  onSignIn(){
    this.authService.signIn('toto', 'passtoto').then(
      // permet de gérer les cas de connections OK
      () => {
        console.log("connection ok");
        this.auhtStatus = this.authService.isAuth;
      },
      // permet de gérer les rejected en cas de login non valide
      () => {
        console.log("connection échouée");
        this.auhtStatus = this.authService.isAuth;
      }
    );
  }

  onSignOut(){
    this.authService.signOut();
    this.auhtStatus = this.authService.isAuth;
  }

}
