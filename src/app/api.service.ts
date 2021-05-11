import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient, private httpClient : HttpClient) { }
  url:String = 'http://api.openweathermap.org/data/2.5/weather'

  apiKey : String = ' '; //Enter your API Key

load(city: String) {
  return this.http.get(this.url + '?q=' + city + '&APPID=' + this.apiKey)
}

getIconUrl(icon: String) {
  return 'http://openweathermap.org/img/w/' + icon + ".png"
}
}
