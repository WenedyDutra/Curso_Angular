import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template:`
  <router-outlet></router-outlet>

    <!-- <app-diretivas-atributos>
      <h1>Aulas de Diretivas Atributo</h1>
      <h3>Final da Aula</h3>
    </app-diretivas-atributos>

    <app-diretivas-atributos>
    <h1>Wenedy Douglas</h1>
    <h3> Dener Troquatte</h3>
    </app-diretivas-atributos>  
    -->
    <!-- <app-new-component></app-new-component> -->
    <!-- <app-diretivas-atributos></app-diretivas-atributos>-->
    <br>
    <!--<app-input [contador]="addValue"></app-input> -->

    <!-- validando dados -->
    <!--<button (click)="add()">Add</button> -->

    <!-- validando dados -->
    <ng-template [ngIf]="getData">
    <h1>{{getData.name}}</h1>
    <h2>{{getData.age}}</h2>
    </ng-template>
    <app-output (pushData)="setData($event)"></app-output>
 
  `
  ,
})
export class AppComponent implements OnInit {

  public addValue: number = 0;
  public getData: {name:string, age:number } | undefined;


  constructor() {

  }

  ngOnInit(): void {
    
  }
  public add() {
    this.addValue += 1;
  }

  public setData(event:{name:string, age:number }) {
    this.getData = event;
  }
}
