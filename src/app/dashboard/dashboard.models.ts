export interface IArtistResponse {
  artists: IArtistInfo[];
}

export interface IAlbumResponse {
  album: IAlbumInfo[]
}

export interface IArtistInfo {
  idArtist: string;
  intFormedYear: number;
  strArtist: string;
  strArtistThumb: string;
  strArtistFanart: string;
  strBiographyEN: string;
  strCountry: string;
  strGenre: string;
  strLastFMChart: string;
  strMood: string;
}

export interface IAlbumInfo {
  idAlbum: string;
  strAlbum: string;
  strArtist: string;
  intYearReleased: string;
  strStyle: string;
  strGenre: string;
  strLabel: string;
  strReleaseFormat: string;
  strAlbumThumb: string;
  strAlbumCDArt: string;
  strDescriptionEN: string;
}
