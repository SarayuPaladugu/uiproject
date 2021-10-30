import { Component } from '@angular/core';
import { LocalStorageService } from './local-storage.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  title = 'uiproject';
  imgUrl : string='../assets/image01.jpg';
  constructor (public localStorageService:LocalStorageService) {}
public get:any;
public data:any;
public getPerson(){
return this.localStorageService.getItem('mystorage');
}
}
