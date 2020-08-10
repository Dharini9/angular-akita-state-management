import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DetailsComponent } from './details/details.component';
import { PostLoginStore } from './core/store/postLogin/post-login.store';
import { AkitaNgDevtools } from '@datorama/akita-ngdevtools';
import { PostLoginQuery } from './core/store/postLogin/post-login.query';

@NgModule({
  declarations: [
    AppComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AkitaNgDevtools.forRoot()
  ],
  providers: [
    PostLoginStore,
    PostLoginQuery
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
