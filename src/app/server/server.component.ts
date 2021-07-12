import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  serverName: string = "testServer"; //will be changed
  status: string;//  = "down";
  id: number = 0;


  constructor() {
    let f: number = Math.random();
    if (f > .5) {
      this.status = "offline";
    }
    else {
      this.status = "online";
    }

  }


ngOnInit(): void {
}
getStatus(){
  return this.status;
}
getColor(): string{
  return this.status == "online" ? "green" : "red";
}





//fooling with styles

getWidth():string{
  
    //generatea a square...
    let f2: number = Math.random();
    if (f2 > .7) {
      return "80px";
    } else if (f2> .3){
      return "40px";
    }
    else {
      return "20px";
    }

}
getNum():number{
  return Math.random()*100;
}

}
