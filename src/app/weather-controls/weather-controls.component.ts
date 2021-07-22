import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../shared/weather.service';
import { delay } from 'rxjs/operators';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { faCheckCircle} from "@fortawesome/free-solid-svg-icons";
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-weather-controls',
  templateUrl: './weather-controls.component.html',
  styleUrls: ['./weather-controls.component.scss']
})
export class WeatherControlsComponent implements OnInit {
  faPlusCircle = faPlusCircle;
  faCheckCircle = faCheckCircle;
  constructor(public weatherService: WeatherService, private modalService: NgbModal) { }

  ngOnInit(): void {
    
  }
  closeResult = '';
  city_input: string = "";

  open(content:any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  addCityFromInput() {
    let city = this.city_input;
    this.weatherService.addCity(city)
    .pipe(delay(1000))
    .subscribe(() => {
      
    });
    this.city_input = "";
    this.modalService.dismissAll();
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

}
