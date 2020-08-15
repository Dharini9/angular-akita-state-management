import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { DataService } from '../services/data.service';
import { PostLoginQuery } from '../store/postLogin/post-login.query';
import { PostLoginService } from '../services/post-login.service';

@Injectable({
  providedIn: 'root'
})
export class DetailResolver implements Resolve<any> {

  constructor(
    private dataService: DataService,
    private postLoginService: PostLoginService,
    private postLoginQuery: PostLoginQuery
  ) { }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> | Promise<any> {
    return this.waitingForLandingData(this);
  }

  waitingForLandingData(thisRef): Promise<any> {
    return new Promise((resolve, reject) => {
      thisRef.postLoginQuery.loginDetails$.subscribe(state => {
        if (state.UserEmail) {
          resolve();
        } else {
          thisRef.getLandingPageData();
        }
      });
    });
  }

  getLandingPageData() {
    this.dataService.commonGetApiCall('http://demo7880871.mockable.io/postlogin').subscribe(result => {
      if (result['Code'] === 200) {
        if (result['Data']['userInfo']) {
          this.postLoginService.storeUserInfo(result['Data']['userInfo']);
        }
      }
    });
  }
}
