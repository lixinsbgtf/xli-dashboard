import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { AppRoutingModule } from './app-routing.module';
import { ListComponent } from './list/list.component';
import { SearchComponent } from './search/search.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatInputModule } from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ListComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatExpansionModule,
    MatInputModule,
    AgmCoreModule.forRoot ({
      apiKey: 'YOUR_API_KEY'
    }),

    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),

    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
