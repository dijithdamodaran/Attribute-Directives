import { style } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //styleUrls: ['./app.component.css'],
styles:[`
.applycolor{
background-color:yellow;
color:blue
  }
`]
 
})
export class AppComponent {
  title = 'attribute-directives-demo';
  colorApplicatiuon:boolean=true;
}
