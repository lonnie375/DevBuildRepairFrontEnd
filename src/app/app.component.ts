import { Component } from '@angular/core';
import { Instrument } from './instrument';
import { InstrumentService } from './instrument.service';
import { RepairOrder } from './repair-order';
import { RepairORderService } from './repair-order.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  newOrder: RepairOrder = {
    id: 0, customer: '', instrument_id: 0, status: 0, price:0, notes: '', bookmark: false
  }; 

  title = 'RepairShopFront';

  TheInstruments: Instrument[] = [];

  constructor(private InstSrv: InstrumentService){
    InstSrv.getAll(
      (result: Instrument[]) => {
        this.TheInstruments = result; 
        console.log(result);
      }
    );
  }

  save(){

  }
}
