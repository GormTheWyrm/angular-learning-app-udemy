import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-secondview',
  templateUrl: './secondview.component.html',
  styleUrls: ['./secondview.component.css']
})
export class SecondviewComponent implements OnInit {
  countries:string[] = [];
  msgLog:string[] = [];
  @ViewChild('exampleInput',{static: false})example:ElementRef<HTMLInputElement> = {} as ElementRef; //use elementRef... but stric mode...
  //had to google how to initialize this
  constructor() { }

  ngOnInit(): void {
    
  }
  countryCreated(name:string){
    this.countries.push(name);
  }
  msgAdded(msg:string){ //msg s actually $event on the secondView html
    this.msgLog.push(msg);
    console.log("msg added");
  }
  showExample(input:HTMLInputElement){
    console.log(input);
    console.log(this.example)
    console.log(input.value);
    console.log(this.example.nativeElement.value)
// alert(input.value)
  }
}
