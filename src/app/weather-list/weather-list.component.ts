import { Component, OnInit } from '@angular/core';
import { delay } from 'rxjs/operators';
import { WeatherService } from '../shared/weather.service';


@Component({
  selector: 'app-weather-list',
  templateUrl: './weather-list.component.html',
  styleUrls: ['./weather-list.component.scss']
})
export class WeatherListComponent implements OnInit {
  public loading:boolean = true;

  constructor(public weatherService: WeatherService) { }

  ngOnInit(): void {
    /* this.weatherService.addCity('')
    .pipe()
    .subscribe(() => {
      this.loading = false;
    }) */
  } 

}
