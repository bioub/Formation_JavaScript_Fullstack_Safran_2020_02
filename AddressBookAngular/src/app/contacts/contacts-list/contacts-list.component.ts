import { Component, OnInit } from "@angular/core";
import { HttpClient, HttpHandler, HttpXhrBackend } from "@angular/common/http";
import { Contact } from "src/app/shared/models/contact";
import { ContactService } from "../contact.service";
import { filter } from 'rxjs/operators';

@Component({
  selector: "app-contacts-list",
  templateUrl: "./contacts-list.component.html",
  styleUrls: ["./contacts-list.component.scss"]
})
export class ContactsListComponent implements OnInit {
  contacts: Contact[] = [
    {
      _id: "987",
      prenom: "Toto",
      nom: "Titi"
    },
    {
      _id: "3456",
      prenom: "Tata",
      nom: "Tutu"
    }
  ];

  // private httpClient: HttpClient;

  // constructor(httpClient: HttpClient) {
  //   this.httpClient = httpClient;
  // }

  constructor(private contactService: ContactService) {}

  ngOnInit(): void {
    this.getContacts();
    this.contactService.events.pipe(
      filter((event) => event === 'refresh')
    ).subscribe(() => {
      this.getContacts();
    });
  }

  getContacts() {
    this.contactService.getAll().subscribe(contacts => {
      this.contacts = contacts;
    });
  }
}
