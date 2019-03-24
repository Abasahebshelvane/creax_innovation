import { Component, OnInit } from '@angular/core';
import {Chart}from "angular-highcharts";
@Component({
  selector: 'app-barchart',
  templateUrl: './barchart.component.html',
  styleUrls: ['./barchart.component.css']
})
export class BarchartComponent implements OnInit {

  
  private type ="bar";
    chart : any;
     d=[1, 2, 3];
      constructor(){
        this.chart=new Chart({
          chart: {
            type: this.type
          },
          title: {
            text: 'line chart'
          },
          credits: {
            enabled: false
          },
          series: [
            // {
            //   name: 'X axis',
            //   data: this.d
            // }
          ]
        });
      }
      


  ngOnInit() {
  }

}
