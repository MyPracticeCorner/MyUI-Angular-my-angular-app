import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appDisableRightClick]',
  standalone: true,
})
export class DisableRightClickDirective {

  constructor() { }

  @HostListener('document:contextmenu', ['$event'])
  onRightClick(event: MouseEvent): void {
    event.preventDefault();  // Disable the right-click context menu
  }

}
