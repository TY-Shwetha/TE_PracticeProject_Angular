import {Directive,ElementRef, Renderer2} from '@angular/core';

@Directive({
    selector:'[app-change-color]'
})

export class bgDirective{

    constructor(private ef:ElementRef,private renderer:Renderer2 ){
      
    }

    onchange(color:string){
       
    }

}