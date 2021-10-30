import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {QuoteComponent} from  './quote.component';
import {HttpClientModule} from '@angular/common/http'
import { NewsComponent } from './news.component';
import { ProgramComponent } from './program.component';
import { FacultyComponent } from './faculty.component';
import { ApplicationComponent } from './application.component';
import { HomeComponent } from './home.component';
import { ContactComponent } from './contact.component';
import { ResourceComponent } from './resource.component';
@NgModule({
  declarations: [
    AppComponent,HomeComponent,QuoteComponent,NewsComponent,ProgramComponent,FacultyComponent,ApplicationComponent,ContactComponent,ResourceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
