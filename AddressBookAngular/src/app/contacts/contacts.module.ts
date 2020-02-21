import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";

import { ContactsRoutingModule } from './contacts-routing.module';
import { ContactsComponent } from './contacts/contacts.component';
import { ContactsListComponent } from './contacts-list/contacts-list.component';
import { ContactsDetailsComponent } from './contacts-details/contacts-details.component';
import { ContactsCreateComponent } from './contacts-create/contacts-create.component';


@NgModule({
  declarations: [ContactsComponent, ContactsListComponent, ContactsDetailsComponent, ContactsCreateComponent],
  imports: [
    CommonModule,
    ContactsRoutingModule,
    FormsModule,
  ]
})
export class ContactsModule { }
