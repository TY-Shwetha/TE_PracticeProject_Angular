import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

 // @Input() public parentData;
 @Input('parentData') public name;
 @Output() public childEvent=new EventEmitter();
  constructor() { }

  ngOnInit(): void {
    this.fireEvent();
  }

  fireEvent(){
    this.childEvent.emit("This is data from child");
  }
}
