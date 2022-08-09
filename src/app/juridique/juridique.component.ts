import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-juridique',
  templateUrl: './juridique.component.html',
  styleUrls: ['./juridique.component.css']
})
export class JuridiqueComponent implements OnInit {
  itsftc:any = "assets/img/itsftc.png";
  logo:any = "assets/img/logo1.png";
  balance:any="assets/img/balance.jpg";

  constructor() { }

  ngOnInit(): void {
  }

}
