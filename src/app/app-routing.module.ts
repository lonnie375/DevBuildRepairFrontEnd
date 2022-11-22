import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookMarksComponent } from './book-marks/book-marks.component';
import { OrderListComponent } from './order-list/order-list.component';

const routes: Routes = [
  { path: '', component: OrderListComponent}, 
  { path: 'bookmarks', component: BookMarksComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
