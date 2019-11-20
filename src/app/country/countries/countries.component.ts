import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss']
})
export class CountriesComponent implements OnInit {
  @Output() keySearch = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  search(event) {
    const keyword = event.target.value;
    this.keySearch.emit(keyword);
  }
}
