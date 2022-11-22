import { outputAst } from '@angular/compiler';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Instrument } from '../instrument';
import { InstrumentService } from '../instrument.service';
import { RepairOrder } from '../repair-order';
import { RepairORderService } from '../repair-order.service';

@Component({
  selector: 'app-add-order',
  templateUrl: './add-order.component.html',
  styleUrls: ['./add-order.component.css']
})
export class AddOrderComponent implements OnInit {

  newOrder: RepairOrder = {
    id: 0, customer: '', instrument_id: 0, status: 0, price:0, notes: '', bookmark: false
  }; 
  
  TheInstruments: Instrument[] = [];

  @Output() save: EventEmitter<RepairOrder> = new EventEmitter<RepairOrder>(); 
  
  constructor(private InstSrv: InstrumentService, private OrderSrv: RepairORderService) { 
    InstSrv.getAll(
      (result: Instrument[]) => {
        this.TheInstruments = result; 
        
      }
    );
  }

  ngOnInit(): void {
  }

  saveIt(){
    this.save.emit(this.newOrder);
  }

}
