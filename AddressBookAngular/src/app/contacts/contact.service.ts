import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Contact } from '../shared/models/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  events = new EventEmitter();

  constructor(private httpClient: HttpClient) { }

  getAll() {
    return this.httpClient.get<Contact[]>('http://localhost:3000/api/contacts');
  }

  getById(id) {
    return this.httpClient.get<Contact>('http://localhost:3000/api/contacts/' + id);
  }

  create(data: Contact) {
    return this.httpClient.post<Contact>('http://localhost:3000/api/contacts', data);
  }
}
