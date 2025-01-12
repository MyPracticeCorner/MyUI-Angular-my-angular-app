import { Component, HostListener } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ThankYouComponent } from './thank-you/thank-you.component';
import { MyAppComponent } from './MyAppComponent/my.app.component'
import { CommonModule } from '@angular/common';
import { DisableRightClickDirective } from '../directive/disable-right-click.directive';

@Component({
  selector: 'app-root',
  imports: [CommonModule, HomeComponent, ThankYouComponent, DisableRightClickDirective, MyAppComponent],
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  isSticky = false;
  isContactFormSubmitted = false;
  title = 'my-angular-app from sachinidea45 ng build --prod';

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isSticky = window.pageYOffset > 100;  // Adjust 100 as per your requirement
  }

  resetIsContactFormSubmitted() {
    this.isContactFormSubmitted = !(this.isContactFormSubmitted);
    let messageTextElement = document.getElementById('messageTextElement') as HTMLElement;
    messageTextElement?.style.setProperty('display', 'block')
  }
}
