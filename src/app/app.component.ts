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
  


  title = 'RepairShopFront';

  

  constructor(private InstSrv: InstrumentService, private OrderSrv: RepairORderService){

  }


}
