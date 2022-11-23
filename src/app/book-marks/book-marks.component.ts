import { Component, OnInit } from '@angular/core';
import { RepairOrder } from '../repair-order';
import { RepairORderService } from '../repair-order.service';
import { ShortRepairList } from '../short-repair-list';

@Component({
  selector: 'app-book-marks',
  templateUrl: './book-marks.component.html',
  styleUrls: ['./book-marks.component.css']
})
export class BookMarksComponent implements OnInit {

  TheList: ShortRepairList[]= [];

  constructor(private Ordersrv: RepairORderService) {
    this.Ordersrv.bookMarks(
      (result: ShortRepairList[]) => {
        this.TheList = result; 
      }
    );
   }

  ngOnInit(): void {
  }

}
