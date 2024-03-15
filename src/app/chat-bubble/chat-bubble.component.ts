import { Component, LOCALE_ID } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageService } from '../services/message.service';
import { Message } from '../message';
import { Observable } from 'rxjs';
import { NgFor, NgIf, NgClass } from '@angular/common';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-chat-bubble',
  standalone: true,
  imports: [CommonModule,NgFor, NgIf, NgClass, DatePipe],
  templateUrl: './chat-bubble.component.html',
  styleUrl: './chat-bubble.component.scss',
  providers: [DatePipe,]
})
export class ChatBubbleComponent {

  messages: Message[] = [];

  constructor(private messageService: MessageService, private datePipe: DatePipe){
  }

  getMessages(): Message[] {
    this.messageService.getUpdatedMessages().subscribe((messages: Message[]) =>{
      this.messages = messages
    })

    return this.messages;
  }

  formatTimestamp(isoString:Date){
    return this.datePipe.transform(isoString, 'shortTime');
  }
}
