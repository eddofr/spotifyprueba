import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Spotify {

  constructor( private http : HttpClient){  }

  getQuery(query : string){
    const headers = new HttpHeaders({
      'Authorization' : 'Bearer BQAdqfUSUwfNPBwatZTtFW0z_iMEoaBpupALgOgQbd_j3GPICUU2IXubY1j1wsEezx9e7NJeUcsOz4qW6e5gXp1zWSwwzBbziDHqxXbpjFFlkrfDMgD2-WwjxjWOiCZbTIGF07oHREQ'
    });
    const url = `https://api.spotify.com/v1/${ query }`;
    return this.http.get(url, {headers})
  }

  getArtists(termino : string){
    return this.getQuery(`search?q=${termino}&type=artist&limit=15`)
                .pipe(map((data : any) => data['artists'].items ));
  }

  getArtist(id : string){
    return this.getQuery(`artists/${ id }`);
  }

  getTopTracks(id : string){
    return this.getQuery(`artists/${ id }/top-tracks?market=US`)
                .pipe(map((tracks :any)=> tracks['tracks']));
  }

  getNewReleases(){
    
    return this.getQuery('browse/new-releases')
               .pipe( map( (data : any) => data['albums'].items));
               
  }
  
}
