import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-hello [name]="'Toto'.repeat(4)"></app-hello>
    <app-hello name="'Toto'.repeat(4)"></app-hello>
    <app-clock [delayMs]="2000"></app-clock>
    <p>Vous avez sélectionné {{selectedCountry}}</p>
    <app-select 
      [items]="countries"
      [selected]="selectedCountry"
      (selectedChange)="selectedCountry = $event"
    ></app-select>
    <app-select 
      [items]="countries"
      [(selected)]="selectedCountry"
    ></app-select>
  `,
  styles: []
})
export class AppComponent {
  countries = ['France', 'Espagne', 'Belgique'];
  selectedCountry = 'Belgique';
}
