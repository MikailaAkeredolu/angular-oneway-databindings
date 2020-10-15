import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
// tslint:disable-next-line: no-input-rename
@Input('title') title: string;
// tslint:disable-next-line: no-input-rename
@Input('body') body: string;
// tslint:disable-next-line: no-input-rename
@Input('age') age: number;

  constructor() { }

  ngOnInit(): void {
  }

}
