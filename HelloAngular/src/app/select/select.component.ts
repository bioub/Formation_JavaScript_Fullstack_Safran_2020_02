import { Component, OnInit, Input, Output, EventEmitter, HostListener } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {

  @Input() items = [];
  @Input() selected;

  @Output() selectedChange = new EventEmitter();

  

  opened = false;

  constructor() { }

  ngOnInit(): void {
    if (!this.selected && this.items.length) {
      this.selected = this.items[0];
    }
  }

  onSelect(item) {
    this.opened = false;
    this.selectedChange.emit(item);
  }

  @HostListener('document:click')
  listenExteriorClick() {
    //this.opened = false;
    // ne pas le faire si le click est dans la balise app-select 
  }
}
