import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  clickCounter = 0;
  name = '';

  constructor() { }

  ngOnInit(): void {
  }

  countClick(): void {
    this.clickCounter += 1;
  }

  setClass(): object {
    return {
      greater: this.clickCounter > 4,
      less: this.clickCounter <= 4
    };
  }
}
