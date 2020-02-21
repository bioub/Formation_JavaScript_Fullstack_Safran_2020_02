import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactsComponent } from './contacts/contacts.component';
import { ContactsDetailsComponent } from './contacts-details/contacts-details.component';
import { ContactsCreateComponent } from './contacts-create/contacts-create.component';


const routes: Routes = [{
  path: 'contacts',
  component: ContactsComponent,
  children: [{
    path: 'create', // /contacts/create
    component: ContactsCreateComponent,
  }, {
    path: ':id', // /contacts/details
    component: ContactsDetailsComponent
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactsRoutingModule { }
