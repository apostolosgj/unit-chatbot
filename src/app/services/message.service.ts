import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Message } from '../message'
import { BehaviorSubject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  private messageSubject: BehaviorSubject<Message[]> = new BehaviorSubject<Message[]>([]);


  messages = this.messageSubject.asObservable;

  constructor(public http:HttpClient) {

  }

  parseMessage(message: Message){
  }



}
