import { Component, OnInit } from '@angular/core';
import { DataService } from '../core/services/data.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.loadDetails();
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
