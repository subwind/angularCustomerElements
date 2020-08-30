import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-same-trade',
  templateUrl: './same-trade.component.html',
  styleUrls: ['./same-trade.component.scss']
})



export class SameTradeComponent implements OnInit {

  @Input() counter:number = 0;

  @Input() dataSet:codeName = null;

  constructor() { }

  ngOnInit(): void {
  }
  
  clickAdd(){
    this.counter++;
  }

}

interface codeName{
  code:string;
  name:string;
}
