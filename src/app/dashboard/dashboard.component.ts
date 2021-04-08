import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { IAlbumInfo, IAlbumResponse, IArtistInfo, IArtistResponse } from './dashboard.models';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  input: string;
  artist: IArtistInfo[];
  albums: IAlbumInfo[];
  selectedAlbums: object[];
  filterObj: object = {
    albumSearch:this.handleAlbumSearch,
    artistSearch: this.handleArtistSearch
  }
  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

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
    this.http.get(`https://www.theaudiodb.com/api/v1/json/1/searchalbum.php?s=${this.input}`
    )
    .toPromise()
    .then((response: IArtistResponse) => {
      this.artist = response.artists;
      console.log(this.artist)
    })
  }

  
}
