import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';

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
  logoImage;
  loaderImage = 'assets/images/loading.gif';
  isFormControlsDisabled = false;

  private onDestroy$ = new Subject<void>();

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {
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
      userName: this.loginForm.get('email').value,
      password: this.loginForm.get('password').value,
      grant_type: 'password'
    };

    const loginParam = `username=${this.loginForm.get('email').value}&password=${this.loginForm.get('password').value}&grant_type=password`;
    // this.store.dispatch(new SaveToken(loginParam));
    this.isFormControlsDisabled = true;
    if (userData.userName && userData.password) {
      this.router.navigate(['landing']);
    }
  }

  ngOnDestroy() {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }

}
