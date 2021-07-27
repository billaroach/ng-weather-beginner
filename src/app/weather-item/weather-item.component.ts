import {Input, Component, OnInit } from '@angular/core';
import { WeatherService } from '../shared/weather.service';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { faSyncAlt } from '@fortawesome/free-solid-svg-icons';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { CityPageComponent } from '../city-page/city-page.component';
@Component({
  selector: 'app-weather-item',
  templateUrl: './weather-item.component.html',
  styleUrls: ['./weather-item.component.scss']
})
export class WeatherItemComponent implements OnInit {

  @Input() city:any;
  @Input() index:number = 0;
  public city_hourly: any;
  faTimesCircle = faTimesCircle;
  faSyncAlt = faSyncAlt;
  closeResult = '';
  loading = false;
  currentDate = new Date();
  constructor(public weatherService: WeatherService,private modalService: NgbModal) { }

  ngOnInit(): void {
    this.index = this.city.id;
    this.weatherService.cityHourlyWeather(this.city.id)
    .subscribe((data)=>{
      this.loading = false;
      this.city_hourly = data;
    })
  }

  tempToCels(temp:number) {
    let kelvin_c = 273.15;
    return Math.round(temp - kelvin_c);
  }

  removeCity(id:number) {
    this.weatherService.removeCity(id);
  }

  currentHours(value:number) {
    return (this.currentDate.getHours() + value) % 24;
  }

  open(content:any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'});
  }
}
