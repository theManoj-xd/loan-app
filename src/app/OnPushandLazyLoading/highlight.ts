import { Directive,ElementRef, Input, input } from '@angular/core';
import { HostBinding, HostListener } from '@angular/core';
 
@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
   @Input() amount!:number;
 
  constructor(private el: ElementRef) {
 
   }
   ngOnInit() {
     this.el.nativeElement.style.backgroundColor = this.amount > 5000 ? 'green' : 'red';
   }

    @HostBinding('style.backgroundColor') bg='';
   @HostListener('mouseenter') onMouseEnter() {
     this.bg = 'lightgreen';
   }
   @HostListener("mousemove") onMouseMove() {
     this.bg = 'lightblue';
   }
   @HostListener('mouseleave') onMouseLeave() {
     this.bg = '';
   }
 
}
 