import { Component, OnInit, Input } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { BodyComponent } from '../body.component';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css'],
  providers: [AppComponent, BodyComponent]
})
export class JobsComponent implements OnInit {
  @Input() myJobs: any;

  constructor() { }

  ngOnInit() {
  }

}
