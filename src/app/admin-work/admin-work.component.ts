import { Component } from '@angular/core';
import { Item } from '../item';
import { ItemOperationsService } from '../item-operations.service';

@Component({
  selector: 'app-admin-work',
  templateUrl: './admin-work.component.html',
  styleUrls: ['./admin-work.component.css']
})
export class AdminWorkComponent {

  __itemService: ItemOperationsService;

  constructor(itemService: ItemOperationsService) {
    this.__itemService = itemService;
  }

  readItems( 
    itemName:string,
    category:string,
    cost:string,
    imageName:string,
    ){
    console.log(itemName+" "+category+""+cost+""+imageName);
    let itemFromUser:Item= new Item(itemName,category,parseInt(cost),imageName);
    this.__itemService.addItems(itemFromUser);
    

  }


}
