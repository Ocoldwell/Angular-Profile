import { Component, Input, OnInit } from '@angular/core';
import { IAlbumInfo } from '../dashboard.models';

@Component({
  selector: 'app-searchresult',
  templateUrl: './searchresult.component.html',
  styleUrls: ['./searchresult.component.scss']
})
export class SearchresultComponent implements OnInit {
  @Input() album: IAlbumInfo;
  
  constructor() { }

  ngOnInit(): void {
    console.log(this.album);
  }

}
