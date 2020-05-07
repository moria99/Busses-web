import { Component, OnInit } from '@angular/core';
import {busLine} from "../../classes/bus";
import {BusServiceService} from "../../services/bus-service.service"
import { from } from 'rxjs';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  pasArr;
  bus;

  addBus(busFrm){
    let b=new busLine(this.bus.num,this.bus.originStation,this.bus.terminatingStation,
      this.bus.isTheLineOutOnTime,this.bus.arrayPassengers,this.bus.price); 
    this.busService.AddBus(b).subscribe((d)=>{
      console.log(d);
    });
    location.reload();
    //busFrm.reset();
  }

  constructor(private busService:BusServiceService) { }

  ngOnInit() {
    this.busService.GetAllBusses().subscribe((b)=>{
      this.pasArr=b[0].arrayPassengers;
    })
    this.bus=new busLine(null,'','',false,this.pasArr,null);
  }

}



