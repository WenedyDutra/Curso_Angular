import { Component, OnInit,EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.scss']
})
export class OutputComponent implements OnInit {

  @Output() public pushData = new EventEmitter();
  public list: Array<{name: string, age: number}> = [
    {name: "wenedy", age: 25 },
    {name: "Nay", age: 32},
    {name: "Dener Troquatte", age: 58}
  ]

  public getDados(event: number){
    this.pushData.emit(this.list[event])
  }
  constructor() { }

  ngOnInit() {
  }

}
