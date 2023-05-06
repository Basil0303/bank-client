import { Directive,ElementRef } from '@angular/core';


@Directive({
  selector: '[appDierative]'
})
export class DierativeDirective {

  constructor(private el:ElementRef) {
    console.log(el)
    this.el.nativeElement.style.backgroundColor="green"
   }

}
