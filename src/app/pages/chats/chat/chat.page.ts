import { AfterContentChecked, AfterViewChecked, AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { IonHeader } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { ChatService } from '../chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit, AfterViewChecked {

  @ViewChild('header') header;
  @ViewChild('chatbox') chatBox: ElementRef;

  paramSubscription: Subscription;

  chatId: string;
  chatInfo;

  headerHeight: number;
  chatBoxHeight: number;

  constructor(private route: ActivatedRoute, private chatService: ChatService) {}

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has('id')) {
        this.chatId = paramMap.get('id');
        this.chatInfo = this.chatService.getChatInfo(this.chatId);
      }
    });
  }

  ngAfterViewChecked(): void {
    this.headerHeight = this.header.el.clientHeight;
    this.chatBoxHeight = this.chatBox.nativeElement.clientHeight + 1;
    console.log(this.chatBoxHeight);
  }
}
