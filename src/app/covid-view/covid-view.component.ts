import { Component, OnInit } from '@angular/core';
import { CovidService } from '../covid.service';

@Component({
  selector: 'app-covid-view',
  templateUrl: './covid-view.component.html',
  styleUrls: ['./covid-view.component.css']
})
export class CovidViewComponent implements OnInit {
  title = 'Covid19';
  disctrictWiseData;
  stateWiseData;
  coviData;
  statesNames;
  constructor(private _covidService: CovidService){}
  ngOnInit(): void {    
    this._covidService.getCovidData().subscribe(data => {
      this.coviData = data; 
      this.stateWiseData = this.coviData.statewise.filter(x=>x.state != 'Total');
      console.log(this.stateWiseData);
    }); 
      this._covidService.getDistrictWiseData().subscribe(data => {
      this.disctrictWiseData = data;
      this.statesNames = Object.keys(this.disctrictWiseData);      
    });
  }
  
  
    
  }
  
  
  
  


