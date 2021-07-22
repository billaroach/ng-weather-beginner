import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../shared/weather.service';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { faCheckCircle} from "@fortawesome/free-solid-svg-icons";
@Component({
  selector: 'app-weather-controls',
  templateUrl: './weather-controls.component.html',
  styleUrls: ['./weather-controls.component.scss']
})
export class WeatherControlsComponent implements OnInit {
  faPlusCircle = faPlusCircle;
  faCheckCircle = faCheckCircle;
  constructor(public weatherService: WeatherService) { }

  ngOnInit(): void {
  }

}
