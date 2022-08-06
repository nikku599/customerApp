import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from './customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private baseURL = "http://localhost:8080/custapp/api/customers";
  constructor(private httpClient: HttpClient) { }

  getEmployeesList(): Observable<Customer[]> {
    return this.httpClient.get<Customer[]>(`${this.baseURL}`);
  }

  createCustomer(customer: Customer): Observable<Object> {
    return this.httpClient.post(`${this.baseURL}`, customer)
  }

  updateCustomer(id: number, customer: Customer): Observable<Object> {
    return this.httpClient.put(`${this.baseURL}/${id}`, customer)
  }

  getCustomerById(id: number): Observable<Customer> {
    return this.httpClient.get<Customer>(`${this.baseURL}/${id}`);
  }

  deleteCustomer(id: number): Observable<Object> {
    return this.httpClient.delete(`${this.baseURL}/${id}`)
  }

}
