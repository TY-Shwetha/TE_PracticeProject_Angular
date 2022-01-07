import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  msgTrue=false;
  msg=false;
  constructor(public ds:DataService) { }

  contactLists:any;
  ngOnInit(): void {
    //this.contactLists=this.ds.getcontacts();
    this.ds.getContact().subscribe(data =>{
      this.contactLists=data;
    })
  }

  addNewContact(){
    const newFormData= {"id":"6","FirstName":"Prithvi","LastName":"Raj"};
    this.ds.createContact(newFormData).subscribe(data=>{
      return this.msg=true;
    })
  }

  updateContact(id){
    const newFormData= {"id":id,"FirstName":"Manoj","LastName":"Nayak"};
    this.ds.updateContact(id,newFormData).subscribe(data=>{
      return this.msgTrue=true;
    })
  }

  deleteContact(id){
    return this.ds.deleteContact(id).subscribe(data=>{
    })
  }
}
