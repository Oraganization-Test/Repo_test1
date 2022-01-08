import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements AfterViewInit {
  userEmailId: string;

  constructor(
    public alertCtrl: AlertController,
    public router: Router,
    private storage: StorageService
  ) { }

  ngAfterViewInit() {
    this.getUserEmailId();
  }

  getUserEmailId() {
    this.storage.getStorage('digify_emailid').then((val) => {
      //console.log('EmailID', val);
      this.userEmailId =  val.value;
    });    
  }

  getLoggedUserName(): Promise <string> {
    return new Promise( (resolve, reject) => {
      this.storage.getStorage('digify_user_id');
    });
  }
}
