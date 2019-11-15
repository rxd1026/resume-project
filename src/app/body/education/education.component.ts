import { Component, OnInit, Input } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { BodyComponent } from '../body.component';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
  providers: [AppComponent, BodyComponent]
})
export class EducationComponent implements OnInit {
  @Input() myEducation: any;

  constructor() { }

  ngOnInit() {
  }

}
