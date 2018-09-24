import { Component, OnInit } from '@angular/core';
// import { Subject } from 'rxjs/Subject';
import { Subject } from 'rxjs';
import { XinServiceService } from '../xin-service.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  // searchText: Subject<String>; --added by qing
  searchText: string;
  
  constructor(private xinService: XinServiceService) { }

  ngOnInit() {
    this.xinService.setSearchText(this.searchText);
  }

}
