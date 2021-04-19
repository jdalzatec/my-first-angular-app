import { Component, OnInit, Input } from '@angular/core';
import { ICustomer } from 'src/app/shared/interfaces';
import { SorterService } from '../../core/sorter.service';

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.css'],
})
export class CustomersListComponent implements OnInit {
  private _customers: ICustomer[] = [];
  @Input() get customers(): ICustomer[] {
    return this._customers;
  }

  set customers(value: ICustomer[]) {
    if (value) {
      this.filteredCustomers = this._customers = value;
      this.calculareOrders();
    }
  }

  filteredCustomers: ICustomer[] = [];
  customersOrderTotal: number;
  currencyCode: string = 'GBP';

  constructor(private sorterService: SorterService) {}

  ngOnInit(): void {}

  calculareOrders() {
    this.customersOrderTotal = 0;
    this.filteredCustomers.forEach((customer: ICustomer) => {
      this.customersOrderTotal += customer.orderTotal || 0;
    });
  }

  filter(data: string) {
    if (data) {
      this.filteredCustomers = this.customers.filter((customer: ICustomer) => {
        return (
          customer.name.toLowerCase().indexOf(data.toLowerCase()) > -1 ||
          customer.city.toLowerCase().indexOf(data.toLowerCase()) > -1 ||
          customer.orderTotal.toString().indexOf(data) > -1
        );
      });
    } else {
      this.filteredCustomers = this.customers;
    }
    this.calculareOrders();
  }

  sort(prop: string) {
    this.sorterService.sort(this.filteredCustomers, prop);
  }
}
