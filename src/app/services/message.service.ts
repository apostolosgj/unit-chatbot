import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Message } from '../message'
import { BehaviorSubject, Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  private messageSubject: BehaviorSubject<Message[]> = new BehaviorSubject<Message[]>([]);
  parsingUrl = "http://localhost:5005/model/parse" 
  messages = this.messageSubject.asObservable;

  constructor(public http:HttpClient) {

  }

  

  sendMessage(message: Message): Observable<Message>{
  
    var body:Object = {
      "text": message.text,
      "message_id": message.message_id
    }

    return this.http.post<Message>(this.parsingUrl, body);
    
  }

  
  

}
