import { Template } from "@angular/compiler/src/render3/r3_ast";
import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'app-warning-alert',
    templateUrl: './warning-alert.html',
    styleUrls: ['./warning-alert.css']
})
export class WarningAlertComponent implements OnInit{

    constructor(){}
    ngOnInit(): void {
    }

}