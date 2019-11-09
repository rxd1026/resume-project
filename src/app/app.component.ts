import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'resume-project';

  HighSchool = {
        name: 'Nobel Academy',
        degree: 'High School',
        date: '2009 - 2011',
        address: 'Kathmandu, Nepal'
      }

  University = {
        college: 'Slippery Rock University',
        degree: 'Undergraduate',
        date: '2015 - May 2020 (Expected)',
        address: 'Slippery Rock, PA' 
      }
    

  };


