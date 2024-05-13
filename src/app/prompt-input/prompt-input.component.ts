import {Component} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MessageService} from '../services/message.service';
import {Message} from '../message';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SpeechRecognitionService} from '../services/speech-recognition.service';

@Component({
  selector: 'app-prompt-input',
  standalone: true,
  imports: [MatButtonModule, MatIconModule, FormsModule, ReactiveFormsModule],
  templateUrl: './prompt-input.component.html',
  styleUrl: './prompt-input.component.scss',
})
export class PromptInputComponent {
  constructor(private messageService: MessageService, private speechRecognition: SpeechRecognitionService ) {}

  promptText = new FormControl();

  sendMessage(prompt: String) {
    let message: Message = {
      sender: 'angular_ui',
      message: prompt,
      timestamp: new Date(),
    };

    console.log(message);

    this.messageService.addMessage(message);
    this.messageService.sendMessage(message).subscribe((res) => {
      console.log(res)
      setTimeout(() => {
        res.forEach((message) => {
          message.sender = 'bot';
          message.timestamp = new Date();
          this.messageService.addMessage(message);
        });
      }, 2000);
    });

    this.promptText.reset();
  }

  startRecording(){

    this.speechRecognition.startListening();
  }
}
