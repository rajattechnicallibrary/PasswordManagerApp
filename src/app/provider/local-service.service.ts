import { Injectable } from '@angular/core';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class LocalServiceService {

  constructor() { 

  }

  getDate(date){
    //console.log(date);
    return date; //moment(date,["DD-MM-YYYY hh:mm A"]).format()
  }

  setDate(date){
  //  console.log(date);
    return moment(new Date(),["DD-MM-YYYY hh:mm A"]).format();
  }
}
