import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  constructor() {}

  getChatInfo(id: string) {
    return 'Tobias Wagner';
  }
}
