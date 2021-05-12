import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myFirstAngular';
  imageurl='https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.washington.edu%2Fnews%2F2017%2F11%2F15%2Fwhat-counts-as-nature-it-all-depends%2F&psig=AOvVaw0_u2rrpRoUbsSsmDlpED6-&ust=1620381928308000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCNiknp3ntPACFQAAAAAdAAAAABAD';
  inputs:string;
  courses=[
    {id:1,name:'java'},
    {id:2,name:'angular'},
    {id:3,name:'js'}
  ];

  onAdd(){
    this.courses.push({id:4,name:"spring"});
  }

  onRemove(course){
    let index=this.courses.indexOf(course);
    this.courses.splice(index,1);
  }

  onChange(course){
    course.name='updated';
  }
}
