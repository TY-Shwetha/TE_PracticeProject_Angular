import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custompipe',
  templateUrl: './custompipe.component.html',
  styleUrls: ['./custompipe.component.css']
})
export class CustompipeComponent implements OnInit {
  // user={
  //   name:"shwetha",
  //   city:"manipal",
  //   cityCode:"ML"
  // };

  user=[
    {
    name:"shwetha",
    city:"manipal",
    cityCode:"ML"
  },
  {
    name:"Arthi",
    city:"Jammu",
    cityCode:"JK"
  },
  {
    name:"Anjali",
    city:"Madhya Pradesh",
    cityCode:"MP"
  },
  {
    name:"Ashok",
    city:"Bihar",
    cityCode:"UP"
  },
  {
    name:"sachin",
    city:"kerala",
    cityCode:"KL"
  }
]
  constructor() { }

  ngOnInit(): void {
  }

}
