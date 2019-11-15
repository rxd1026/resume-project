import { Component, OnInit, Input } from '@angular/core';
import { BodyComponent } from '../body.component';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css'],
  providers: [BodyComponent, AppComponent]
})
export class SkillComponent implements OnInit {
  @Input() mySkills: any;
  

  constructor() { }

  ngOnInit() {
  }

}
