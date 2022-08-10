import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-biding',
  templateUrl: './data-biding.component.html',
  styleUrls: ['./data-biding.component.scss']
})
export class DataBidingComponent implements OnInit {

  public nome: string = "Wenedy";
  public idade: number = 29;
  public um: number = 1;


  public ckeckdDisabled: boolean = false;
  public imgSRC: string = "data:image/jpeg;base64,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"
  public imgTitle: string = "texto img"

  public position: {x: number, y: number} = {x: 0, y:0 }

  constructor() { }

  ngOnInit(): void {
  

  }

  public alertInfo(valor:MouseEvent) {
    console.log(valor);
  }
  public mouseMoveteste(valor: MouseEvent) {
    this.position.x = valor.offsetX;
    this.position.y = valor.offsetY;
  }

}
