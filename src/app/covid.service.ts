import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient }    from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CovidService {

  constructor(private http: HttpClient) { }

  private  covidApi = 'https://api.covid19india.org/data.json'; 
  private district_wise_data = 'https://api.covid19india.org/state_district_wise.json';

  getCovidData() {
    return this.http.get(this.covidApi);    
  }

  getDistrictWiseData() {
    return this.http.get(this.district_wise_data);
  }

  

}