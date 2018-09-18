import { Component, OnInit } from '@angular/core';
import { Client } from '../client';
import { XinServiceService } from '../xin-service.service';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  lati = 41.7930671862;
  lngi = -87.7136071496;
  lati2 = 42.7930671862;
  lngi2 = -86.7136071496;
  locationChosen = false;

  clients: Client[] = [];
  // tclient: Client = { id : 100, name : 'test', latitude : 40, longitude : 40};

  clientIsNotEmpty() {
    console.log(this.clients);
    return this.clients;
  }

  onChoseLocation(event) {
    console.log(event);
    this.lati = event.coords.lat;
    this.lngi = event.coords.lng;
    this.locationChosen = true;
    console.log(this.clients);
  }

  constructor(private xinService: XinServiceService) { }

  ngOnInit() {
    this.getClients();
  }

  getClients(): void {
    this.xinService.getClients()
      .subscribe(clients => this.clients = clients);
  }


}
