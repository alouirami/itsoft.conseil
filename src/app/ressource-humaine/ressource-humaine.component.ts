import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ressource-humaine',
  templateUrl: './ressource-humaine.component.html',
  styleUrls: ['./ressource-humaine.component.css']
})
export class RessourceHumaineComponent implements OnInit {
  itsftc:any = "assets/img/itsftc.png";
  logo:any = "assets/img/logo1.png";
  conseilformation:any="assets/img/conseilformation.jpg";
  constructor() { }

  ngOnInit(): void {
  }

}
