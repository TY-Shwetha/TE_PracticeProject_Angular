import { Pipe, PipeTransform } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';


@Pipe({
  name: 'highlight'
})
export class HighlightPipe implements PipeTransform {

   constructor(private sanitizer:DomSanitizer){}
  transform(value: string, cityCode:string): any {
    //return 'city name:' +city;
   // return this.sanitizer.bypassSecurityTrustHtml('<div style="background-color:red;">'+ city+ '</div>');
    //return '<div class="bg bg-danger">'+ city + '</div>';

    if(cityCode==='ML'|| cityCode==='UP'){
      return this.sanitizer.bypassSecurityTrustHtml('<div style="background-color:yellow;">'+ cityCode+ '</div>');
    }else if(cityCode==='KL'|| cityCode==='JK'||cityCode==="MP"){
      return this.sanitizer.bypassSecurityTrustHtml('<div style="background-color:red;">'+ cityCode+ '</div>');
    } else
      return null;
  }

}
