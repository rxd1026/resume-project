import { Component, OnInit, Input } from '@angular/core';
import { BodyComponent } from '../body.component';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css'],
  providers: [BodyComponent, AppComponent]
})
export class IntroComponent implements OnInit {
  @Input() myIntroduction: string;

  constructor() { }

  ngOnInit() {
  }

}
