import { Component, OnInit, DoCheck } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  providers: [AuthService]
})
export class NavbarComponent implements OnInit, DoCheck {
  url:any= "";
  pages:any = [
    {url: '/home', text: 'Dashboard'},
    {url: '/teams', text: 'Equipos'},
    {url: '/projects', text: 'Proyectos'}
  ]
  constructor(public auth: AuthService, private router: Router) { 
    this.url = this.router.url;
  }

  ngOnInit() {
  }

  ngDoCheck(){
    this.url = this.router.url;
  }



  isLogged() : boolean{
    return this.auth.isLogged();
  }

}
