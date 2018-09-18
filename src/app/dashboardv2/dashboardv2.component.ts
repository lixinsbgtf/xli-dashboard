import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { XinServiceService } from '../xin-service.service';
import { Client } from '../client';

@Component({
  selector: 'app-dashboardv2',
  templateUrl: './dashboardv2.component.html',
  styleUrls: ['./dashboardv2.component.css']
})
export class Dashboardv2Component implements OnInit {

  lati = 41.7930671862;
  lngi = -87.7136071496;
  locationChosen = false;

  clients: Client[] = [];

  onChoseLocation(event) {
    console.log(event);
    this.lati = event.coords.lat;
    this.lngi = event.coords.lng;
    this.locationChosen = true;
  }

  constructor(private xinService: XinServiceService) { }

  ngOnInit() {

  }

  getClients(): void {
    this.xinService.getClients()
      .subscribe(clients => this.clients = clients);
  }

}
