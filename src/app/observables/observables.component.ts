import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.css']
})
export class ObservablesComponent implements OnInit {

  orderstatus:any;
  data:Observable<any>;
  constructor() { }

  ngOnInit(): void {

   this.data= new Observable(observer =>{
        setTimeout(()=>{
          observer.next('In progress')
        },2000);

        setTimeout(() => {
          observer.next('Processing')
        }, 4000);

        setTimeout(() => {
          observer.next('Completed')
          
        }, 6000);

        setTimeout(() => {
          observer.complete()
        }, 8000);


setTimeout(() => {
  observer.next("after complete")
},8000);

      this.data.subscribe(val=>{
        this.orderstatus=val;
      })


    })
  }

}
