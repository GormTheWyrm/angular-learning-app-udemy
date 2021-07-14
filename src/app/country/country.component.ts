import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {
  @Input('cName')countryName?:string;
  leader:string = '';
  @Output('msg') appointMessage: EventEmitter<string> = new EventEmitter();
  //objects with key value pairs work well with generics {name: "kevin" ,job: "logger"}for example
  governmentType:string = "none";
  constructor() { }

  ngOnInit(): void {
  }
  appoint():void{
    //create an event...
    this.appointMessage.emit(`${this.leader} was appointed leader of ${this.countryName} on ${Date()}`);
  }
}
