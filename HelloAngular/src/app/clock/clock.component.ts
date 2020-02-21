import { Component, OnInit, Input, OnChanges, SimpleChanges, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css']
})
export class ClockComponent implements OnInit, OnChanges, OnDestroy {

  @Input() delayMs = 1000;
  now = new Date();

  private intervalId;

  constructor() { }

  ngOnInit(): void {
    this.intervalId = setInterval(() => {
      this.now = new Date();
    }, this.delayMs)
  }

  ngOnChanges(changes: SimpleChanges) {
    // appelé si delayMs change dans app
    if (changes.delayMs.currentValue !== changes.delayMs.previousValue) {
      // refaire le setInterval
      // clearInterval(this.intervalId)
    }
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }

}
