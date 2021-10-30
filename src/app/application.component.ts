import { Component,OnInit} from '@angular/core';
import {analyzeAndValidateNgModules } from '@angular/compiler';
/*
@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.css']
})
export class ApplicationComponent{

  constructor() { }

  ngOnInit(): void {
  }

}*/
import { LocalStorageService } from './local-storage.service';
@Component({
  selector: 'app-application',
  templateUrl: './application.component.html'
})
export class ApplicationComponent {
  constructor(public localStorageService: LocalStorageService) {}
  public txtfname: string = '';
  public txtlname: string = '';
  public get : any;
  data:any;

  public person = {txtfname: this.txtfname, txtlname: this.txtlname};
  public addPerson(){
  this.person.txtfname = this.txtfname
  this.person.txtlname = this.txtlname;
  this.localStorageService.setItem("mystorage",this.txtfname)
  this.get=this.getPerson();
  //alert(this.get);
}
    public getPerson(){
        this.data = this.localStorageService.getItem("mystorage");
        return this.data;
    }
}
