import { Component, OnInit, Input } from '@angular/core';
import { AppComponent } from '../app.component';


@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css'],
  providers: [AppComponent]
})
export class BodyComponent implements OnInit {

  Pmessage= "Skills"


  Pskill= [ 'C++', 'HTML/JavaScript/CSS, Python',
  'Arduino', 'Shell Scripting', 
  'Adobe Photoshop / Illustrator / InDesign', '3D Modelling', 'Angular'
 ]


  constructor() { }

  ngOnInit() {
  }

}
