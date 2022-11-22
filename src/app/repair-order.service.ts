import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RepairOrder } from './repair-order';

@Injectable({
  providedIn: 'root'
})
export class RepairORderService {

  constructor(private http: HttpClient) { }

  add(cb: any, order: RepairOrder){
    this.http.post<RepairOrder>('https://localhost:7217/repairorder', order).subscribe(cb); 
  }
}
