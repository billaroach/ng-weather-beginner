import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {tap} from "rxjs/operators";



@Injectable({providedIn: 'root'})
export class WeatherService {
  private weather_list: any[] = [];
  private api_key:string = '6c0a0f5d9a09ac1ee829e87def1e932b';
  constructor(private http: HttpClient) {
  }

  public get weatherList() {
    return this.weather_list;
  }
  public get apiKey() {
      return this.api_key;
  }

  /* fetchTodos(){
    return this.http.get<any[]>('https://jsonplaceholder.typicode.com/todos?_limit=5')
      .pipe(tap(weather_list => this.weather_list = weather_list))
  } */

  /* onToggle(id: number) {
    const index = this.todos.findIndex(t => t.id === id);
    this.todos[index].completed = !this.todos[index].completed;
  } */

  addCity(city_name: any) {
    return this.http.get<any>(`https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${this.api_key}`)
        .pipe(tap(weather_item => this.weather_list.push(weather_item)))
  }

  removeCity(id: number) {
    this.weather_list = this.weather_list.filter(t => t.id !== id);
  }
}