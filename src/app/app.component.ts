import { Component, OnInit } from '@angular/core';
// import { Subject } from 'rxjs/Subject';
import { Subject } from 'rxjs';
import { XinServiceService } from './xin-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'xli-app';

  constructor(private xinService: XinServiceService) { }

  search(text){
    this.xinService.setSearchText(text);
  }
}
