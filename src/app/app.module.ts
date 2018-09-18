import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { Dashboardv2Component } from './dashboardv2/dashboardv2.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    Dashboardv2Component
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AgmCoreModule.forRoot ({
      apiKey: 'YOUR_GOOGLE_MAP_API_KEY'
    }),

    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
