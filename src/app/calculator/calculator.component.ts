import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  title = 'angular';
  input  : string="";
  output : number=0;
  
  constructor() { }

  ngOnInit(): void {
  }

  display(val:string) {
    this.input +=val;
  }
  evaluate() {
    this.output = eval(this.input);
  }
  backspace() {
    this.input = this.input.substring(0,this.input.length-1);
  }
  clear() {
    this.input="";
    this.output=0;
  }

}
