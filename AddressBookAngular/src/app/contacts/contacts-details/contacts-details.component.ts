import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContactService } from '../contact.service';
import { Contact } from 'src/app/shared/models/contact';
import { map, switchAll, switchMap } from 'rxjs/operators'
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-contacts-details',
  templateUrl: './contacts-details.component.html',
  styleUrls: ['./contacts-details.component.scss']
})
export class ContactsDetailsComponent implements OnInit, OnDestroy {

  contact: Contact;

  private subscription: Subscription;

  constructor(private activatedRoute: ActivatedRoute, private contactService: ContactService) { }

  ngOnInit(): void {
    // this.activatedRoute.paramMap.subscribe((paramMap) => {
    //   this.contactService.getById(paramMap.get('id'))
    //     .subscribe((contact) => {
    //       this.contact = contact;
    //     });
    // });
    this.subscription = this.activatedRoute.paramMap.pipe(
      map((paramMap) => paramMap.get('id')),
      switchMap((id) => this.contactService.getById(id))
    ).subscribe((contact) => {
      this.contact = contact;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
