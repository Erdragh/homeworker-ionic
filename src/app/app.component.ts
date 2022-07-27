import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Dashboard', url: '/dashboard', icon: 'home' },
    { title: 'Stundenplan', url: '/timetable', icon: 'time' },
    { title: 'Chats', url: '/chats', icon: 'chatbubbles' },
    { title: 'Hausaufgaben', url: '/homework', icon: 'checkbox' },
    { title: 'Kalender', url: '/calendar', icon: 'calendar' },
    { title: 'Unterrichtsinhalte', url: '/lessons', icon: 'book' },
    { title: 'Neuigkeiten', url: '/news', icon: 'newspaper' },
    { title: 'Dateien', url: '/files', icon: 'folder' },
    { title: 'Noten', url: '/grades', icon: 'musical-notes' },
    { title: 'Lerntagebuch', url: '/tracker', icon: 'stopwatch' },
    { title: 'Aktivitäten', url: '/activities', icon: 'notifications' },
    { title: 'Deine Klasse', url: '/group', icon: 'people' },
    { title: 'Support', url: '/support', icon: 'help-buoy' },
    { title: 'Einstellungen', url: '/settings', icon: 'settings' },
  ];
  constructor() {}

  logout() {
    console.log('log out');
  }
}
