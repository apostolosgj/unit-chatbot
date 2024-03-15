import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ChatComponent } from './chat/chat.component';
import { ChatBubbleComponent } from './chat-bubble/chat-bubble.component';
import { PromptInputComponent } from './prompt-input/prompt-input.component';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import { SidenavComponent } from './sidenav/sidenav.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { BugReportComponent } from './bug-report/bug-report.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ChatComponent, ChatBubbleComponent, PromptInputComponent, MatButtonModule, MatIconModule, MatSidenavModule, SidenavComponent, HeaderComponent, FormsModule, ReactiveFormsModule, NgFor, MatDialogModule, BugReportComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'unit-chatbot-ui';
}
