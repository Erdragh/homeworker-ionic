import { Component, Input, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss'],
})
export class MessageComponent implements OnInit {
  @Input() sent = false;
  @Input() author: string | null;
  @Input() id: number;

  constructor(private actionSheetCtrl: ActionSheetController) {}

  ngOnInit() {}

  showActionSheet() {
    this.actionSheetCtrl.create({
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancelling action sheet');
          },
        },
        {
          text: 'Delete Message',
          role: 'danger',
          handler: () => {
            console.log('Deleting chat message');
          },
        },
      ],
      keyboardClose: true,
      subHeader: 'What do you want to do?'
    }).then(actionSheetEl => {
      actionSheetEl.present();
    });
  }
}
