
import {Passenger, busLine} from '../classes/bus';
import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Headers, RequestOptions } from '@angular/http';
import { filter,tap,map,share } from 'rxjs/operators';
import { convertActionBinding } from '@angular/compiler/src/compiler_util/expression_converter';


@Injectable({
  providedIn: 'root'
})
export class BusServiceService {

  bussesArr=Array<busLine>();
  passengersArr1 = Array<Passenger>();
  passengersArr2 = Array<Passenger>();
  p1 = { name: "moshe", age: 15 };
  p2 = { name: "shoshi", age: 12 };
  p3 = { name: "chana", age: 25 };
  p4 = { name: "yael", age: 6 };
  p5 = { name: "yaakov", age: 59 };
  p6 = { name: "dan", age: 30 };
  b1=new busLine(1,"aaa","bbb",true,this.passengersArr1,2.7);
  b2=new busLine(2,"ccc","ddd",true,this.passengersArr2,2.7);
  b3=new busLine(3,"eee","fff",true,this.passengersArr1,2.7);
  b4=new busLine(4,"ggg","hhh",false,this.passengersArr2,2.7);

      //filter(d=>d.id==3),
  
  constructor(private http:HttpClient) {
    this.passengersArr1.push(this.p1,this.p2,this.p3);
    this.passengersArr2.push(this.p4,this.p5,this.p6);
    this.bussesArr.push(this.b1,this.b2,this.b3,this.b4); 
  }
  
  GetAllPassengers():any{
    //return this.passengersArr1;
    return this.http.get('http://localhost:3000/allPassengers');
  }

  DeleteByIndex(index){
    this.bussesArr.splice(index,1);
  }
  
  AddBus(b){
    // this.bussesArr.push(b);
    console.log("in srvice");
    console.log(b);
    return this.http.post('http://localhost:3000/addBus',b);
  }

  updateBus(num: number, apdateBus: busLine){
    return this.http.put('http://localhost:3000/apdateBus/'+num, apdateBus);
  }

  deleteBus(num:number){
    return this.http.delete('http://localhost:3000/deleteBus/'+num);
  }

  GetAllBusses():any{
    return this.http.get('http://localhost:3000/bussesTable');
  }



    
    //return this.bussesArr;
    
    // return this.http.get("http://localhost:3000/api").toPromise().then((d)=>{
    //   console.log(d);
    //   return d;
    // })
    // .catch((s)=>{
    //   console.log("ddd");
    //   return false})

  

}
