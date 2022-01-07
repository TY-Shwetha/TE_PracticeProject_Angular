import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  // getcontacts(){
  //   const contact_list=[
  //    {contactId:1,contactName:'shwetha'},
  //    {contactId:2,contactName:'sadhvi'},
  //    {contactId:3,contactName:'shradha'},
  //    {contactId:4,contactName:'sanvi'},
  //   ];
  //   return contact_list;
  // }

  dbUrl = "http://localhost:3000/contact";

  getContact() {
    return this.http.get(this.dbUrl);
  }

  createContact(createBody){
    return this.http.post(this.dbUrl,createBody);
  }

  updateContact(id,updateBody){
    const updateUrl="http://localhost:3000/contact/"+ id;
    return this.http.put(updateUrl,updateBody);
  }

  deleteContact(id){
    const deleteUrl="http://localhost:3000/contact/"+id;
    return this.http.delete(deleteUrl);
  }
  callingTemplate() {
    console.log("calling");

  }
}
