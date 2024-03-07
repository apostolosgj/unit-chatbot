import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Message } from '../message'
import { BehaviorSubject, Observable } from 'rxjs'
import { botResponse } from '../../botResponse'

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  private messageSubject: BehaviorSubject<Message[]> = new BehaviorSubject<Message[]>([]);
  parsingUrl = "http://localhost:5005/webhooks/rest/webhook" 
  messages = this.messageSubject.asObservable;

  constructor(public http:HttpClient) {

  }

  

  sendMessage(message: Message): Observable<botResponse>{


    return this.http.post<botResponse>(this.parsingUrl, message);
    
  }

  

  
  

}
