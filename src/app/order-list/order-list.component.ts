import { Component, OnInit } from '@angular/core';
import { RepairOrder } from '../repair-order';
import { RepairORderService } from '../repair-order.service';
import { ShortRepairList } from '../short-repair-list';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {

  repairList: ShortRepairList[] = [];

  constructor(private OrderSrv: RepairORderService) { 
    OrderSrv.shortList(
      (result: ShortRepairList[]) => {
        this.repairList = result; 
      }
    );
  }

  ngOnInit(): void {
  }


  save(order: RepairOrder){
    //we are calling the API
    this.OrderSrv.add(
      //This is our callback
      (result: RepairOrder) => {
        alert(result.id)
      },
      //This parameter is what we want to save 
      order
    );
  }

  openOrder(id: number){
    this.OrderSrv.getOne(
      (result: RepairOrder) => {

      },
      id
    );
  }

}
