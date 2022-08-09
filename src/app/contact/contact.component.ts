import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  itsftc:any = "assets/img/itsftc.png";
  avion:any = "assets/img/avion.jpg";
  lieux:any = "assets/img/lieux.jpg";
  telephone:any = "assets/img/telephone.jpg";
  logo:any = "assets/img/logo1.png";
  constructor() { }

  ngOnInit(): void {
  }

}
