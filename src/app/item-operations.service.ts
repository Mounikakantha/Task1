import { Injectable } from '@angular/core';
import { Item } from './item';


@Injectable({
  providedIn: 'root'
})
export class ItemOperationsService {
  baseURL:string = 'http://localhost:2023';
  submitItemEndPoint:string=this.baseURL+'/items';
  ItemByRestaurantIdEndPoint:string=this.baseURL+'/items/by';

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

  getItemByCategory(filterCategory:string):Item[]
  {
    // localhost:8080/api/course/{category}
   let outputArr:Item[] = [];

    this.itemArr.forEach(i=>{
      if(i.category == filterCategory)
      {
        outputArr.push(i);
      }
    });

    return outputArr;
  }

  getItemByitemName(filterName:string):Item[]
  {
    // localhost:8080/api/course/{category}
   let outputArr:Item[] = [];

    this.itemArr.forEach(i=>{
      if(i.itemName == filterName)
      {
        outputArr.push(i);
      }
    });

    return outputArr;
  }

  
}

 