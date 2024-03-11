import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MessageService } from '../services/message.service';
import { Message } from '../message';
import { FormControl } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { timestamp } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { botResponse } from '../../botResponse';

@Component({
  selector: 'app-prompt-input',
  standalone: true,
  imports: [MatButtonModule, MatIconModule, FormsModule, ReactiveFormsModule],
  templateUrl: './prompt-input.component.html',
  styleUrl: './prompt-input.component.scss',
})
export class PromptInputComponent {
  constructor(private messageService: MessageService) {}

  promptText = new FormControl();

  sendMessage(prompt: String) {
    let message: Message = {
      sender: 'angular_ui',
      message: prompt,
      timestamp: new Date().toISOString(),
    };

    console.log(message);

    this.messageService.addMessage(message);
    this.messageService.sendMessage(message).subscribe((res) => {
      setTimeout(() => {
        res.forEach((message) => {
          message.sender = 'bot';
          this.messageService.addMessage(message);
        });
      }, 2000);
    });
  }
}
