import { Component, OnInit, Input } from '@angular/core';
import { SkillComponent } from '../body/skill/skill.component';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  
  @Input() first: string ;
  @Input() last: string;
  constructor() { }

  ngOnInit() {
  }

}
