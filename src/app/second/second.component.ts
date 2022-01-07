import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {

 
  @Input('parentData') public data:string;


  money:string="child to parent";
  today:Date=new Date();
  //today:Date;
 // @Input('moviesDetails') public movies;
  constructor() {
    //console.log("I am Second Constructor");

  }

  // ngOnChanges() {
  //   console.log("I am Second ngOnChange");
  // }

   ngOnInit(): void {
  //   console.log("Im am Second ngOnInit");
   }

  // ngDoCheck() {
  //   console.log("I am Second ngDoCheck");
  // }

}
