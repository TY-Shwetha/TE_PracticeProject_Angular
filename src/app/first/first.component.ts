import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { SecondComponent } from '../second/second.component';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
//AfterViewInit
  //@ViewChild('someContent') public someContent:ElementRef;
 // @ViewChild(SecondComponent) dateViewerRef:SecondComponent;

//  @ViewChildren(SecondComponent) dataOfComponentRef:QueryList<SecondComponent>;


@ViewChild('cmp')  
public data:string="Shwetha";
  constructor(){

  }
  ngOnInit(): void {
    
  }

  // ngAfterViewInit(){
  //   console.log(this.dataOfComponentRef.toArray);
  //   this.dataOfComponentRef.toArray().forEach((data) => {
  //     setInterval(()=>{
  //     data.today=new Date();
  //     },2000)
  //   });
  // }

  // View child
  // ngAfterViewInit(){
  //   console.log(this.dateViewerRef.today);
  //   setInterval(()=>{
  //     this.dateViewerRef.today=new Date();
  //   },2000)
    
  // }










  
  // public movies=[{
  //   name:"dil Bechara",
  //   actor:"Shushanth"
  // },
  // {
  //   name:"Radhe",
  //   actor:"Salman khan"
  // },
  // {
  //   name:"Om shanti Om",
  //   actor:"Shah ruk Khan"
  // },
  // {
  //   name:"Kite",
  //   actor:"Shah Ruk Khan"
  // }]

  // constructor() {
  //   console.log("I am First Constructor");
    
  //  }
  //  ngOnChanges(){
  //    console.log("I am First ngOnChange"); 
  //  }

  // ngOnInit(): void {
  //   console.log("Im am First ngOnInit"); 
  // }

  // ngDoCheck(){
  //   console.log("I am First ngDoCheck");  
  // }

  // ngAfterContentInit(){
  //   console.log("I am First ngafterContentInit");
    
  // }

  // ngAfterContentChecked(){
  //   console.log("I am First ngafterContentChecked"); 
  // }

  // ngAfterViewInit(){
  //   console.log("I am First ngafterViewInit");
    
  // }

  // ngAfterViewChecked(){
  //   console.log("I am First ngafterViewChecked");
    
  // }

  // ngOnDestroy(){
  //   console.log("I am First ngOnDestroy");
    
  // }


}
