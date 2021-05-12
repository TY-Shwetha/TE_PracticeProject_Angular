import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }

  // getcontacts(){
  //   const contact_list=[
  //    {contactId:1,contactName:'shwetha'},
  //    {contactId:2,contactName:'sadhvi'},
  //    {contactId:3,contactName:'shradha'},
  //    {contactId:4,contactName:'sanvi'},
  //   ];
  //   return contact_list;
  // }

  dburl="http://localhost:3000/contact";
  getContact(){
    return this.http.get(this.dburl);
  }
  callingTemplate(){
  console.log("calling");
  
  }
}
