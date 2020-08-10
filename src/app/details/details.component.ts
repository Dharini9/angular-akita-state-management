import { Component, OnInit } from '@angular/core';
import { DataService } from '../core/services/data.service';
import { PostLoginQuery } from '../core/store/postLogin/post-login.query';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  displayName = 'this is display name';
  emailID: string;

  constructor(
    private dataService: DataService,
    private postLoginQuery: PostLoginQuery
  ) { }

  ngOnInit() {
    this.loadDetails();
    this.postLoginQuery.selectName$.subscribe(displayName => {
      if (displayName) {
        this.displayName = displayName;
      }
    });

    this.postLoginQuery.loginDetails$.subscribe(state => {
      this.emailID = state.UserEmail;
    });
  }

  loadDetails() {
    this.dataService.commonGetApiCall('http://demo7880871.mockable.io/postlogin').subscribe(result => {
      if (result['Code'] === 200) {
        console.log(result['Data']);
        if (result['Data']['userInfo']) {
          this.dataService.storeUserInfo(result['Data']['userInfo']);
        }
      }
    });
  }

}
