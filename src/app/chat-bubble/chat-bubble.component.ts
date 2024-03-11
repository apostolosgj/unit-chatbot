import { Component } from '@angular/core';
import { MessageService } from '../services/message.service';
import { Message } from '../message';
import { Observable } from 'rxjs';
import { NgFor, NgIf, NgClass } from '@angular/common';


@Component({
  selector: 'app-chat-bubble',
  standalone: true,
  imports: [NgFor, NgIf, NgClass],
  templateUrl: './chat-bubble.component.html',
  styleUrl: './chat-bubble.component.scss'
})
export class ChatBubbleComponent {

  messages: Message[] = [];

  constructor(private messageService: MessageService){

  }

  getMessages(): Message[] {
    this.messageService.getUpdatedMessages().subscribe((messages: Message[]) =>{
      this.messages = messages
    })

    return this.messages
  }
}
