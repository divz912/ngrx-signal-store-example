import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  @Output() close: EventEmitter<void> = new EventEmitter();
  @Output() login: EventEmitter<{ username: string, password: string }> = new EventEmitter();

  constructor() { }

  signIn() {
    this.login.emit({ username: this.username, password: this.password });
    // You can add your login logic here
  }

  closeModal() {
    this.close.emit();
  }
}