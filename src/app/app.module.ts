import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { WelcomeComponent } from './home/welcome.component';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { ApiLogComponent } from './apiLog/api-log.component';
import { ApiLogService } from './apiLog/api-log.service';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    ApiLogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'apiLog',component: ApiLogComponent},
      {path: 'welcome',component: WelcomeComponent},
      {path: '', redirectTo:'apiLog',pathMatch: 'full'}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
