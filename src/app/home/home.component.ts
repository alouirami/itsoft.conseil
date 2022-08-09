import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  itsftc:any = "assets/img/itsftc.png";
  image1:any = "assets/img/img1.jpg";
  image2:any = "assets/img/img2.jpg";
  image3:any = "assets/img/img3.jpg";
  travail:any = "assets/img/travail.jpg";
  equilibre:any = "assets/img/equilibre.jpg";
  contabilite:any = "assets/img/contabilite.jpg";
  avion:any = "assets/img/avion.jpg";
  lieux:any = "assets/img/lieux.jpg";
  telephone:any = "assets/img/telephone.jpg";
  logo:any = "assets/img/logo1.png";
  constructor() { }

  ngOnInit(): void {
  }

}
