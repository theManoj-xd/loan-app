import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { HighlightDirective } from "../highlight";

@Component({
  selector: 'app-test',
  imports: [HighlightDirective],
  templateUrl: './test.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './test.css'
})
export class Test {
  @Input() data: any;
  amount!: number;
   balance!:number;
 
  constructor() {
    this.balance = 7500;
  }

  Check() {
    //this.data.name="New Name";
    this.data = { ...this.data, name: "New Name" };
    console.log(this.data);
  }
  
  
}