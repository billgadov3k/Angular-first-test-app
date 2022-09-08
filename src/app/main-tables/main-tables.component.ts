import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  name: string;
  position: number;
  age: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', age: 50, symbol: 'H'},
  {position: 2, name: 'Helium', age: 46, symbol: 'He'},
  {position: 3, name: 'Lithium', age: 61, symbol: 'Li'},
  {position: 4, name: 'Beryllium', age: 25, symbol: 'Be'},

];

@Component({
  selector: 'app-main-tables',
  templateUrl: './main-tables.component.html',
  styleUrls: ['./main-tables.component.css']
})
export class MainTablesComponent implements OnInit {

  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

  addPers() {
    ELEMENT_DATA.push({
      position: 5,
      name: "Aleks",
      age: 33,
      symbol: 'RU'
    });
    console.log(ELEMENT_DATA)
  }
}
