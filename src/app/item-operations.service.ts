import { Injectable } from '@angular/core';
import { Item } from './item';


@Injectable({
  providedIn: 'root'
})
export class ItemOperationsService {

  constructor() { }
  

  itemArr:Item[]=[];

  addItems(itemFromUser:Item){
    this.itemArr.push(itemFromUser); 
    console.log("Inside Item Service : Item Added "+itemFromUser.itemName);
    console.log(" Total Item Are :- "+this.itemArr.length);
  }

  getItemArr():Item[]
  {
    return this.itemArr;
  }
}

 