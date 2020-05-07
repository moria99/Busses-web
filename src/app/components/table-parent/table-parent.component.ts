import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-parent',
  templateUrl: './table-parent.component.html',
  styleUrls: ['./table-parent.component.css']
})
export class TableParentComponent implements OnInit {
  
  urlImg="http://t1.gstatic.com/images?q=tbn:ANd9GcTG6lQdaYnxnHmpQKvzs3E2d8Az4WZTx2GMMFc6ichu9c3Y0HyPFWHKCdk";
  numBusStopParent:number=129;
  messege:string;

  clickMy(value){
    this.messege=value;
  }

  constructor() { }

  ngOnInit() {
  }

}
