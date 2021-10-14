import { Directive, ElementRef, Renderer2, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[ngSubrayado]'
})
export class SubrayadoDirective {

  @Input('ngSubrayado') config: any;

  @HostBinding('class') isHover: string;

  constructor( private elem: ElementRef, private renderer: Renderer2 ) {
    console.log(elem.nativeElement);

    // elem.nativeElement.style.textDecoration = 'underline'; //Navegador
  
    renderer.setStyle( elem.nativeElement, 'text-decoration', 'underline' );
    // renderer.setStyle( elem.nativeElement, 'color', 'blue' );


    this.config = {
      colorHover: '#9B00A3',
      colorNoHover: '#00A1A3'
    }
    
   }

   @HostListener('mouseover')
   onHover(){
    this.renderer.setStyle( this.elem.nativeElement, 'color', this.config.colorHover);
    this.isHover = 'hover';
   }

   @HostListener('mouseout')
   onOut(){
    this.renderer.setStyle( this.elem.nativeElement, 'color', this.config.colorNoHover);
    this.isHover = 'no-hover';
   }
  



}
