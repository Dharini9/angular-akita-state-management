import { Injectable } from '@angular/core';
import { PostLoginStore } from '../store/postLogin/post-login.store';

@Injectable({
  providedIn: 'root'
})
export class PostLoginService {

  constructor(
    private postLoginStore: PostLoginStore
  ) { }

  storeUserInfo(userInfo) {
    this.postLoginStore.update(userInfo);
  }
}
