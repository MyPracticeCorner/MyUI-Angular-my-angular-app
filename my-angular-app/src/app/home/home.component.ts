import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  @Output() sendMessageOnClick = new EventEmitter();

  sendMessageClick() {
    this.sendMessageOnClick.emit();
  }
}
