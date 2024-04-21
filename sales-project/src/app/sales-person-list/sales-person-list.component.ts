import { Component } from '@angular/core';
import { SalesPerson } from './sales-person';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list-bootstrap.component.html',
  styleUrl: './sales-person-list.component.css',
})
export class SalesPersonListComponent {
  salesPersonList: SalesPerson[] = [
    new SalesPerson('Anup', 'Kumar', 'anup.kumar@gmail.com', 50000),
    new SalesPerson('John', 'Doe', 'john.doe@gmail.com', 40000),
    new SalesPerson('Gia Hy', 'Vuong', 'hyvuonggia@gmail.com', 30000),
    new SalesPerson('Mai', 'Truong', 'mai.truong@gmail.com', 60000),
  ];
}
