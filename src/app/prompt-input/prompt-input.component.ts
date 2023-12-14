import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-prompt-input',
  standalone: true,
  imports: [MatButtonModule, MatIconModule],
  templateUrl: './prompt-input.component.html',
  styleUrl: './prompt-input.component.scss'
})
export class PromptInputComponent {

}
