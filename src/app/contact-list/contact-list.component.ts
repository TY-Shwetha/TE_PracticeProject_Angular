import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  constructor(public ds:DataService) { }

  contactLists:any;
  ngOnInit(): void {
    //this.contactLists=this.ds.getcontacts();
    this.ds.getContact().subscribe(data =>{
      this.contactLists=data;
    })
  }

}
