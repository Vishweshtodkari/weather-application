import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { Weather } from '../app.component';
import { ApiService } from './../api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @Output() onSelection: EventEmitter<Weather> = new EventEmitter<Weather>()  
  weather: Weather = new Weather()
  city: String = ""

  constructor(private apiService : ApiService) { }

  submit() {
    this.apiService.load(this.city).subscribe(data => {
      this.weather.city = data['name']
      this.weather.conditions = data['weather'][0]['main']
      this.weather.temperature = Math.round((data['main']['temp'] - 273.15))
      this.weather.icon = this.apiService.getIconUrl(data['weather'][0]['icon'])
      this.onSelection.emit(this.weather)
    })
  }

  ngOnInit(): void {
  }

}
