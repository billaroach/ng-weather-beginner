import {Input, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather-item',
  templateUrl: './weather-item.component.html',
  styleUrls: ['./weather-item.component.scss']
})
export class WeatherItemComponent implements OnInit {

  @Input() city:any;
  @Input() index:number = 0;
  constructor() { }

  ngOnInit(): void {
    this.index = this.city.id;
  }

  tempToCels(temp:number) {
    let kelvin_c = 273.15;
    return Math.round(temp - kelvin_c);
  }

}
