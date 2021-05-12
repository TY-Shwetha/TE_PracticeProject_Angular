import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  user={
    userId:20,
    firstName:"shwetha",
    lastName:"prabhu",
    dob:"05/05/1998",
    salary:456000
  };

  constructor() { }

  ngOnInit(): void {
  }

}
