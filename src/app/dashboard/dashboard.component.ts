import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import {
  IAlbumInfo,
  IAlbumResponse,
  IArtistInfo,
  IArtistResponse,
} from './dashboard.models';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  @Input() cols: number;
  input: string;
  artist: IArtistInfo[];
  albums: IAlbumInfo[];
  selectedAlbums: object[];
  selector: string = 'Album';
  constructor(private http: HttpClient) {}

  ngOnInit(): void {}
  handleSearch() {
    switch (this.selector) {
      case 'Artist':
        return this.handleArtistSearch();
      case 'Album':
        return this.handleAlbumSearch();
      default:
        return this.handleAlbumSearch();
    }
  }
  handleAlbumSearch() {
    this.http
      .get(
        `https://www.theaudiodb.com/api/v1/json/${environment.apiKey}/searchalbum.php?s=${this.input}`
      )
      .toPromise()
      .then((response: IAlbumResponse) => {
        this.albums = response.album;
        console.log(this.albums);
        return this.albums;
      });
  }

  handleArtistSearch() {
    this.http
      .get(
        `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${this.input}`
      )
      .toPromise()
      .then((response: IArtistResponse) => {
        this.artist = response.artists;
        console.log(this.artist);
      });
  }


  handleChildChange(filter) {
    this.selector = filter;
  }
}
