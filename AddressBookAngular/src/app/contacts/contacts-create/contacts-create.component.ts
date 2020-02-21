import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/shared/models/contact';
import { ContactService } from '../contact.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contacts-create',
  templateUrl: './contacts-create.component.html',
  styleUrls: ['./contacts-create.component.scss']
})
export class ContactsCreateComponent implements OnInit {

  contact: Contact = new Contact();

  constructor(private contactService: ContactService, private router: Router) { }

  ngOnInit(): void {
  }

  submit() {
    this.contactService.create(this.contact).subscribe((contact) => {
      this.contactService.events.emit('refresh');
      this.router.navigate(['contacts', contact._id]);
    })

  }

}
