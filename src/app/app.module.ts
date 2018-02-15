import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{HttpModule}from '@angular/http';
import{FormsModule,ReactiveFormsModule}from '@angular/forms';

import { AppComponent } from './app.component';
import { MycsvProjectComponent } from './mycsv-project/mycsv-project.component';

import{UserService} from './service/data.service';

@NgModule({
  declarations: [
    AppComponent,
    MycsvProjectComponent
  ],
  imports: [
    BrowserModule,HttpModule,FormsModule,ReactiveFormsModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
