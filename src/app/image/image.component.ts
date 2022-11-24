import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {
  selectimg : string="";
  img : any;
  constructor() { }

  ngOnInit(): void {
  }

  displayimg() {
   if(this.selectimg == "tiger") {
    this.img = "/assets/tiger.jpg";
   }
   else if(this.selectimg == "lion") {
    this.img = "/assets/lion.jpg";
   }
   else if(this.selectimg == "none") {
    this.img = null;
   }
   else if(this.selectimg == "hero") {
    this.img="/assets/darshan.jpg";
   }
  }

  clear() {
    this.selectimg="none";
    this.img= null;
  }

}
