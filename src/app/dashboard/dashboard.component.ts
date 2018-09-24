import { Component, OnInit } from '@angular/core';
import { Client } from '../client';
import { XinServiceService } from '../xin-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  lati = 51.0146;
  lngi = -93.8289;
  locationChosen = false;
  infoWindowOpened = null;

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

  constructor(private xinService: XinServiceService, private router:Router) { }

  ngOnInit() {
    this.getClients();
    this.xinService.searchTextSubject.subscribe(item => {
      this.getClients();
     });
  }

  getClients(): void {
    this.xinService.getClients()
      .subscribe(clients => {
        this.clients = clients.filter(item => !this.xinService.searchText || item.id.toString().includes(this.xinService.searchText));
      });
  }

  clickedMarker(infoWindow, index: number) {

    if(this.infoWindowOpened ===  infoWindow){
      return;
    }
      
    if(this.infoWindowOpened !== null){
      this.infoWindowOpened.close();
    }
      
    this.infoWindowOpened = infoWindow;
  }


  showDetails(id) {
    this.router.navigate(['list/' + id ]);
  }
}
