import { Component,Input, OnInit,Output,EventEmitter } from '@angular/core';
//import * as busClass from '../../classes/bus'
import { from } from 'rxjs';
import { initDomAdapter } from '@angular/platform-browser/src/browser';
import { busLine } from 'src/app/classes/bus';
import { BusServiceService } from 'src/app/services/bus-service.service';

@Component({
  selector: 'app-bus-table',
  templateUrl: './bus-table.component.html',
  styleUrls: ['./bus-table.component.css']
})
export class BusTableComponent implements OnInit {
 
  @Input() numBusStopchild:number;
  @Output() clickOnTable:EventEmitter<string>=new EventEmitter<string>();

  openForm=false;
  kavimExist=true;
  bussesArray:Array<busLine>;

  constructor(private busService:BusServiceService) {
    console.log("construcrot");
    }

  ngOnInit() {
    console.log("ngOnInit");
    this.busService.GetAllBusses().subscribe((d)=>{
      this.bussesArray=d;
      this.busService.GetAllPassengers().subscribe((d)=>{
        for(let b of this.bussesArray){
          b.arrayPassengers=d.filter(x=>x.busLine==b.num);
        }
      });
    });
  }

  clickOnMy(){
    this.clickOnTable.emit("click on child table");
  }

  deleteById(i){
    console.log(i);
    this.busService.DeleteByIndex(i);
  }

  addBus()
  {
    // let pas=[{name:"aaa",age:12},{name:"bbb",age:40}];
    // let b=new busClass.busLine(290,"wer","werty",false,pas,10);
    // busClass.bussesArr.push(b);
    this.openForm=true;
  }
}
