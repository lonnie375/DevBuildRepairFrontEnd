import { Component, OnInit } from '@angular/core';
import { RepairOrder } from '../repair-order';
import { RepairORderService } from '../repair-order.service';
import { ShorRepairListService } from '../shor-repair-list.service';
import { ShortRepairList } from '../short-repair-list';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {

  repairList: ShortRepairList[] = [];

  //This going to hold the one that they're editing
  editOrder: RepairOrder = {
    id: 0, customer: '', instrument_id: 0, status: 0, price:0, notes: '', bookmark: false
  }; 

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

  refresh(){
    this.OrderSrv.shortList(
      (result: ShortRepairList[] )=> {
        this.repairList = result; 
      }
    )
  }

  openOrder(id: number){
    this.OrderSrv.getOne(
      (result: RepairOrder) => {
        this.editOrder = result; 
      },
      id
    );
  }

  update(order: RepairOrder){
    this.OrderSrv.update(
      () => {
        this.refresh();
      },
      order
    );
  }

}
