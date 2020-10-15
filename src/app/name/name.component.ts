import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-name',
  templateUrl: './name.component.html',
  styleUrls: ['./name.component.css']
})
export class NameComponent implements OnInit {
// using the output decorator
@Output()nameSubmit = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  // Create an event emmiter
  // tslint:disable-next-line: max-line-length
  // The child component exposes an EventEmitter property with which it emits events when something happens.
 onClick(name: string) {
  this.nameSubmit.emit(name);
 }

}
