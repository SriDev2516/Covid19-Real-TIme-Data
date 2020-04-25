import { CovidService } from './../covid.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-state-view',
  templateUrl: './state-view.component.html',
  styleUrls: ['./state-view.component.css']
})
export class StateViewComponent implements OnInit {
  totalStateData;
  disctricData;
  id;
  response;
  constructor(private activatedRoute: ActivatedRoute, private covidService: CovidService) { }
  


  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(x => {
      this.id = x.get('id');
      this.covidService.getDistrictWiseData().subscribe(data => {
        console.log(data);
        this.totalStateData = data;
        this.disctricData = this.totalStateData[this.id].districtData;     

        let disctricDataProps = Object.keys(this.disctricData);
        this.response =[];
        for(let prop of disctricDataProps) {
          this.response.push(this.disctricData[prop]);
        }
        console.log(disctricDataProps);
        console.log(this.response);

        for(let i=0; i<this.response.length;i++){
          this.response[i]['district']=disctricDataProps[i];
        }
        console.log(disctricDataProps);
        console.log(this.response);
        
     });
      
    });
  }

}
