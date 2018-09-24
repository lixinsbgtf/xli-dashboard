import { Component, OnInit } from '@angular/core';
import { Client } from '../client';
import { XinServiceService } from '../xin-service.service';
import { MatExpansionModule } from '@angular/material/expansion';
import { ActivatedRoute } from '@angular/router';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  chart: Chart;
  id: number;
  clients: Client[];

  constructor(private xinService: XinServiceService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getClients();
    this.route.params.subscribe(params => {
      this.id = +params['id'];
   });
   this.xinService.searchTextSubject.subscribe(item => {
    this.getClients();
   });
  }

  getClients(): void {
    this.xinService.getClients()
      .subscribe(clients => {
        this.clients = clients.filter(item => !this.xinService.searchText || item.id.toString().includes(this.xinService.searchText));
        this.refreshChart(this.clients);
      });
  }

  refreshChart(clients){
    this.chart = new Chart('canvas', {
      type: 'bar',
      data: {
        labels: clients.map(item => item.id),
        datasets: [
          { 
            label: "Asking",
            backgroundColor: "#3e95cd",
            data: clients.map(item => item.asking)
          },
          { 
            label: "Sold",
            backgroundColor: "#8e5ea2",
            data: clients.map(item => item.sold)
          },
        ]
      },
      options: {
        title: {
          display: true,
          text: 'Asking/sold price comparison'
        },
        responsive: true, 
        maintainAspectRatio: false,
      }
    });
  }
}
