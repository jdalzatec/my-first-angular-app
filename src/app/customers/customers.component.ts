import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css'],
})
export class CustomersComponent implements OnInit {
  title: string;
  people: any[];

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