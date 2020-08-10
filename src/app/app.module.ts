import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DetailsComponent } from './details/details.component';
import { AkitaNgDevtools } from '@datorama/akita-ngdevtools';
import { LoginComponent } from './login/login.component';
import { StoreModule } from './core/store/store.module';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent,
    DetailsComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule,
    CoreModule,
    AkitaNgDevtools.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
