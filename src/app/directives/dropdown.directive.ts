import { Directive, HostListener, ElementRef, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})

export class DropdownDirective {
  constructor(private elementRef: ElementRef) {}

  @HostBinding('class.open') isOpen: boolean = false;

  // use @HostListener to get click event from element this directive is on
  @HostListener('click') toggleOpen(eventData: Event) {
    this.isOpen = !this.isOpen;
  }
}