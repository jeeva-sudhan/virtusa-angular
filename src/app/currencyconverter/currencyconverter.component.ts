import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-currencyconverter',
  templateUrl: './currencyconverter.component.html',
  styleUrls: ['./currencyconverter.component.css']
})
export class CurrencyconverterComponent implements OnInit {
  fromconversion : string="";
  toconversion : string="";
  inp: number=0;
  out:number=0;
  constructor() { }

  ngOnInit(): void {
  }

  converter() {
    if(this.fromconversion == "IN" && this.toconversion == "US") {
      this.out = this.inp/74;
    }
    else if(this.fromconversion == "US" && this.toconversion == "IN") {
      this.out = this.inp*74;
    }
  }

  clear() {
    this.inp=0;
    this.out=0;
    this.fromconversion="none";
    this.toconversion="none";
  }

}
