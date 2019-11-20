import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.scss']
})
export class CitiesComponent implements OnInit {
  @Input() keyChild;

  constructor() {
  }

  ngOnInit() {
  }

}
