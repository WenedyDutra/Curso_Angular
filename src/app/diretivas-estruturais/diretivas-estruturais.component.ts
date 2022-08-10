import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-estruturais',
  templateUrl: './diretivas-estruturais.component.html',
  styleUrls: ['./diretivas-estruturais.component.scss']
})
export class DiretivasEstruturaisComponent implements OnInit {

  public condition: boolean = true;
  public conditionClick: boolean = true;
  public list: Array<{ nome: string, idade: number}> = [
    {nome: "Wenedy Douglas", idade:35},
    {nome: "Paulo Douglas", idade:30},
    {nome: "Evandro Douglas", idade:28},
  ];
  public nome:string = 'Wenedy';
  constructor() { }

  ngOnInit(): void {
    setInterval( () => {
      if(this.condition){
      this.condition = false;
      }else{
        this.condition = true;
      }
    },2000)
  }
  public onClick () {
    setInterval( () => {
      if(this.conditionClick){
      this.conditionClick = false;
      }else{
        this.conditionClick = true;
      }
    },2000)
  }

  // push enviar um item para nosso array
  public onClickAddList() {
    this.list.push({nome:"Nay", idade: 31})
  }

  //splice remover item do nosso Array
  //evente pega a posição
  public onClickEventList(event: number) {
    this.list.splice(event, 1)
  }

}
