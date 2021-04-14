import { Component, OnInit } from '@angular/core';
import { ICustomer } from '../shared/interfaces';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css'],
})
export class CustomersComponent implements OnInit {
  isVisible: boolean = true;
  title: string;
  people: ICustomer[];

  changeVisibility() {
    this.isVisible = !this.isVisible;
  }

  constructor() {}

  ngOnInit(): void {
    this.title = 'Customers';
    this.people = [
      {
        id: 1,
        name: 'Juan David',
        city: 'Phoenix',
        orderTotal: 9.99,
        customerSince: new Date(2018, 8, 1),
      },
    ];
  }
}
