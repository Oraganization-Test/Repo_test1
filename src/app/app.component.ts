import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@capacitor/splash-screen';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  currentPageTitle = 'Dashboard';

  appPages = [
    {
      title: 'Dashboard',
      url: '/dashboard',
      icon: 'easel'
    },
    {
      title: 'Account',
      url: '/account',
      icon: 'accessibility'
    },
    {
      title: 'Photo',
      url: '/add-photo',
      icon: 'camera'
    },
    {
      title: 'Record',
      url: '/record-message',
      icon: 'mic'
    },
    {
      title: 'Send Letter',
      url: '/send-letter',
      icon: 'rocket'
    },
    {
      title: 'Settings',
      url: '/settings',
      icon: 'settings'
    }
  ];

  constructor(
    private platform: Platform
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      SplashScreen.hide();
    });
  }
}
