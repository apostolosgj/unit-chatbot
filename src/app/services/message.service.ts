import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Message } from '../message';
import { BehaviorSubject, Observable } from 'rxjs';
import { botResponse } from '../../botResponse';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  private messageSubject: BehaviorSubject<Message[]> = new BehaviorSubject<
    Message[]
  >([]);
  private messages: Message[] = [];
  parsingUrl = 'http://localhost:5005/webhooks/rest/webhook';

  constructor(public http: HttpClient) {}

  addMessage(message: Message): void {
    this.messages.push(message);
    console.log(this.messages);
    this.messageSubject.next(this.messages.slice());
  }

  sendMessage(message: Message): Observable<Message[]> {
    return this.http.post<Message[]>(this.parsingUrl, message);
  }

  getUpdatedMessages() {
    return this.messageSubject.asObservable();
  }
}
