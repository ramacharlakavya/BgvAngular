import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BackgroundService } from './background.service';
import { HttpClientModule } from '@angular/common/http';
import { SearchByIdComponent } from './search-by-id/search-by-id.component';
import { SearchByNameComponent } from './search-by-name/search-by-name.component';
import { SetStatusComponent } from './set-status/set-status.component';
import { LoginSucessComponent } from './login-sucess/login-sucess.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SearchByIdComponent,
    SearchByNameComponent,
    SetStatusComponent,
    LoginSucessComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [BackgroundService],
  bootstrap: [AppComponent]
})
export class AppModule { }


