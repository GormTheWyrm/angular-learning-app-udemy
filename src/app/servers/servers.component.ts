import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer: boolean = false;
  serverCreationStatus: string = 'No server was created'; //would be better as (?)
  newServerName?: string = "default server name";
  serverCreated: boolean = false;
  servers: any = [1];
  user: string = '';
  logs?: any = [];
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit(): void {
  }
  addNewServer() {

  }
  onCreateServer() {
    this.serverCreationStatus = "server \"" + this.newServerName + "\" was created";
    // this.serverCreationStatus = "1";
    this.serverCreated = true;
    this.servers.push(1);
  }
  onUpdateServerName(event: Event) {
    // console.log(event);
    this.newServerName = (<HTMLInputElement>event.target).value
  }

  //code challenge
  toggleLog(): void {
    this.addLog();
  }
  logOpen = false; //variable for toggle coding challenge
  addLog() {
    let msg = "";
    if (this.logOpen == true) {
      msg = "closed log";
    }
    else {
      msg = "opened log";
    }
    this.logs.push({
      id: this.logs.length,
      action: msg,
      timestamp: Date()
    });
    this.logOpen =!this.logOpen; 
  }
  listBlue(obj:any):string{
    if (obj.id >4){
      return "blue";
    }
    else {
      return "none";
    }
  }



}
