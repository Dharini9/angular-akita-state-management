import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  loginForm: FormGroup;
  landingPageData: any;
  isDataLoading: any;
  versionNumber: string;
  private onDestroy$ = new Subject<void>();
  logoImage;
  loaderImage = 'assets/images/loading.gif';
  isFormControlsDisabled = false;

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    /**this.fromApp.select(state => state.landingPage.landingPageData)
      .pipe(takeUntil(this.onDestroy$))
      .subscribe((landingPageData) => {
        this.landingPageData = landingPageData;
        this.logoImage = `${this.basePath}${this.landingPageData.Logo}`;
      });*/

    this.loginForm = this.fb.group({
      'email': [null, Validators.compose([Validators.required, Validators.email])],
      'password': [null, Validators.compose([Validators.required])]
    });
  }

  usernameTextbox($event) {
    setTimeout(() => {
      $event.component.focus();
    }, 0);
  }

  getIsDataLoading() {
    /**this.isDataLoading = this.fromApp.select(state => state.login.isLoading)
      .pipe(takeUntil(this.onDestroy$))
      .subscribe((isLoading) => {
        this.isDataLoading = isLoading;
      });*/
  }

  onFormSubmit(e) {
    this.getIsDataLoading();
    const userData = {
      'userName': this.loginForm.get('email').value,
      'password': this.loginForm.get('password').value,
      'grant_type': 'password'
    };
    // const loginParam  = new FormData();
    // loginParam.append('userName',this.loginForm.get('email').value);
    // loginParam.append('password',this.loginForm.get('password').value);
    // loginParam.append('grant_type', 'password');

    const loginParam = `username=${this.loginForm.get('email').value}&password=${this.loginForm.get('password').value}&grant_type=password`;
    // this.store.dispatch(new SaveToken(loginParam));
    this.isFormControlsDisabled = true;
    /**this.fromApp.select(state => state.login).subscribe(x => {
      if (!x.isAuthenticated && !x.isLoading) {
        // Reset password if wrong username and password
        this.isFormControlsDisabled = false;
        this.loginForm.reset({
          password: '',
          email: this.loginForm.get('email').value
        });
      }
    });*/
  }

  ngOnDestroy() {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }

}
