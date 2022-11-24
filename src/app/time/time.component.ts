import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.css']
})
export class TimeComponent implements OnInit {
  time:any;
  constructor() { }

  ngOnInit(): void {
    this.get();
  }

  get() {
    setInterval(()=>{
      this.time = new Date();
    },1000)
  }

}
