import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ThankYouComponent } from './thank-you/thank-you.component';
import { CommonModule } from '@angular/common';
import { DisableRightClickDirective } from '../directive/disable-right-click.directive';

@Component({
  selector: 'app-root',
  imports: [CommonModule, HomeComponent, ThankYouComponent, DisableRightClickDirective],
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  isContactFormSubmitted = false;
  title = 'my-angular-app from sachinidea45 ng build --prod';

  resetIsContactFormSubmitted() {
    this.isContactFormSubmitted = !(this.isContactFormSubmitted);
    let messageTextElement = document.getElementById('messageTextElement') as HTMLElement;
    messageTextElement?.style.setProperty('display', 'block')
  }
}
