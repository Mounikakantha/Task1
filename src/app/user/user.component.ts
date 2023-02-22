import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Item } from '../item';
import { ItemOperationsService } from '../item-operations.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  __itemService:ItemOperationsService;
  router:Router;

  allItems:Array<Item>=[];
 


  constructor(itemService:ItemOperationsService,router:Router){
    this.__itemService=itemService;
    this.allItems=this.__itemService.getItemArr();
    this.router=router;
  }

  getFilterData(filterValue:string)
  {
    console.log(" Filter Value "+filterValue);

    this.allItems = this.__itemService.getItemByCategory(filterValue);
  }
  getFilteritemName(filterValue:string)
  {
    console.log(" Filter Value "+filterValue);

    this.allItems = this.__itemService.getItemByitemName(filterValue);
  }

}
