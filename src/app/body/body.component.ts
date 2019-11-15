import { Component, OnInit, Input } from '@angular/core';
import { AppComponent } from '../app.component';


@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css'],
  providers: [AppComponent]
})
export class BodyComponent implements OnInit {
  @Input() myIntro: string;
  @Input() myJobsInBody: any;
  @Input() myEducationInBody: any;
  @Input() mySkillsInBody: any;


  constructor() { }

  ngOnInit() {
  }

}
