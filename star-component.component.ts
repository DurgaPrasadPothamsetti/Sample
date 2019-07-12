import { Component, OnInit, OnChanges, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-star-component',
  templateUrl: './star-component.component.html',
  styleUrls: ['./star-component.component.css']
})
export class StarComponentComponent implements OnInit,OnChanges {

  @Input() rating:number;
  @Output() ratingClicked: EventEmitter<string> =new EventEmitter<string>();
  rate: number;
  starWidth:number;
  constructor() { }

  ngOnInit() {
    this.starWidth=this.rating *19;
  }
  onClick(){
    this.ratingClicked.emit("You Clicked on " + this.rating + " Star Rating");
  }
 ngOnChanges(){
   
   
 }
}
