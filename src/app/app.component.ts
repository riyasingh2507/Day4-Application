import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  fname!: string;
  lname!: string;
  amount!: string;
  myCurrency!: string;
  show:boolean=false;

  selectChangeHandler(event: any) {
    this.myCurrency = event.target.value;
  }

  searchTerm: string = '';

  users: any = [
    {
      Company: 'Skiba',
      Contact: 'Pipelayer',
      Country: 'Indonesia',
    },
    {
      Company: 'Linkbuzz',
      Contact: 'Safety Officer',
      Country: 'Peru',
    },
    {
      Company: 'Riffwire',
      Contact: 'Painter',
      Country: 'Brazil',
    },
    {
      Company: 'Flashpoint',
      Contact: 'Millwright',
      Country: 'China',
    },
    {
      Company: 'Skilith',
      Contact: 'HVAC',
      Country: 'Philippines',
    },
    {
      Company: 'Dablist',
      Contact: 'Refridgeration',
      Country: 'Russia',
    },
    {
      Company: 'Thoughtblab',
      Contact: 'Millwright',
      Country: 'Japan',
    },
    {
      Company: 'Eire',
      Contact: 'Plumber',
      Country: 'Indonesia',
    },
    {
      Company: 'Bubblemix',
      Contact: 'Terrazzo',
      Country: 'United States',
    },
    {
      Company: 'Mycat',
      Contact: 'Boilermaker',
      Country: 'Philippines',
    },
    {
      Company: 'Myworks',
      Contact: 'Glazier',
      Country: 'China',
    },
    {
      Company: 'Eadel',
      Contact: 'Stucco Mason',
      Country: 'Indonesia',
    },
    {
      Company: 'Kimia',
      Contact: 'Tile Setter',
      Country: 'China',
    },
    {
      Company: 'Dabjam',
      Contact: 'Terrazzo',
      Country: 'Portugal',
    },
    {
      Company: 'Jayo',
      Contact: 'Brickmason',
      Country: 'France',
    },
    {
      Company: 'Dabfeed',
      Contact: 'Painter',
      Country: 'Russia',
    },
    {
      Company: 'Rhynyx',
      Contact: 'Linemen',
      Country: 'Greece',
    },
    {
      Company: 'Oba',
      Contact: 'Pipefitter',
      Country: 'Nepal',
    },
    {
      Company: 'Twiyo',
      Contact: 'Millwright',
      Country: 'Philippines',
    },
    {
      Company: 'Voonte',
      Contact: 'Refridgeration',
      Country: 'Russia',
    },
    {
      Company: 'Rhybox',
      Contact: 'Boilermaker',
      Country: 'Ukraine',
    },
    {
      Company: 'Quimba',
      Contact: 'Welder',
      Country: 'China',
    },
    {
      Company: 'Midel',
      Contact: 'Safety Officer',
      Country: 'Guam',
    },
    {
      Company: 'Kwinu',
      Contact: 'Linemen',
      Country: 'Philippines',
    },
    {
      Company: 'Zoonder',
      Contact: 'Carpenter',
      Country: 'Iraq',
    },
  ];

  constructor() {}
  ngOnInit() {}
}
