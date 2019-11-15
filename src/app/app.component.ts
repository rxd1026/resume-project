import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'resume-project';

  Info = {
    first: 'Rojesh',
    last: 'Dangol',
    address: {street: '816 Perry HWY', city: 'Pittsburgh', state: 'PA', zip: '15229', apt: '24'},
    email: 'rozsx1@gmail.com',
    phone: '412-689-3520',
    link: 'www.linkedin.com/in/rojesh-dangol'
  }

  Intro = {
    desc: 'An undergraduate student seeking an internship position to explore career options in the IT sector. I am hard-working and self-motivated student, always looking to improve my skills and learn more. I am committed to developing my career path as an IT professional and to expand on the work experience.'
  }

  Skills= { skill: [ 'C++', 'HTML/JavaScript/CSS, Python',
  'Arduino', 'Shell Scripting', 
  'Adobe Photoshop / Illustrator / InDesign', '3D Modelling', 'Angular'
  ]}

  languages: {all: ['English', 'Nepali', 'Hindi'] 
  }

  Jobs= {
    jobA: {
      date: '2011-2015',
      company: 'Help Me Dot Com. Pvt. Ltd',
      position: 'Assistant Manager',
      location: 'Kathmandu, Nepal',
      desc: ['Small scale online shopping and I was responsible to keep track of items in the store.', 'Responsible of purchasing and updating new items for the website.', 'Manage the orders, decide how and when the delivery was to be made as the company had limited employees.', 'Deal with other partner companies and get the best deal possible.']
  
    }
  }

  Education= {
    high: {
      name: 'Nobel Academy',
      date: {start: '2009',
              end: '2011'},
      degree: 'High School',
      location: 'Kathmandu, Nepal'
    },
    college: {
      name: 'Slippery Rock University',
      date: {start: '2015',
              end: '2020'},
      degree: 'Computer Science Information Technology',
      location: 'Slippery Rock, PA'
    }
  }

  
    

  };


