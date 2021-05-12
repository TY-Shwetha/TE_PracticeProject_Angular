import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attribute-directives',
  templateUrl: './attribute-directives.component.html',
  styleUrls: ['./attribute-directives.component.css']
})
export class AttributeDirectivesComponent implements OnInit {
  isAvailable=false;
  size=10;
  color:string;
  constructor() { }

  ngOnInit(): void {
  }

}
