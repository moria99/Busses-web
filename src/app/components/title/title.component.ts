import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit {
  isSpecial=false;
  currentClasses={
    'special':true
  }
  currentStyle={
    'font-size': '26px',
    'color': 'red'
  }
  constructor() { }

  ngOnInit() {
  }

}
