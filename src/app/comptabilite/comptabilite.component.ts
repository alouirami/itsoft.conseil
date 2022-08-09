import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comptabilite',
  templateUrl: './comptabilite.component.html',
  styleUrls: ['./comptabilite.component.css']
})
export class ComptabiliteComponent implements OnInit {
  itsftc:any = "assets/img/itsftc.png";
  logo:any = "assets/img/logo1.png";
  investment:any="assets/img/investment.jpg";
  constructor() { }

  ngOnInit(): void {
  }

}
