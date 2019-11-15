import { Component, OnInit, Input } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [AppComponent]
})
export class HeaderComponent implements OnInit {
   @Input() myInfo: any;
  
  
  constructor() { }

  ngOnInit() {
  }

}
