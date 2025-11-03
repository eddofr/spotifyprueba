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
      'Authorization' : 'Bearer BQCE6cACd5ClTb59HcwDq5X0sRcbhisrH5gpNT7q4M5WlwCPtOK8N2Ch2VLcpUw6pFy9R2dxXR1wKPwFt6Q50vJ_YKdHkX2PxXPHkfNX7r9AW2AwHdbyn4eRQ_OEQ4kMnBSiGwZabjY'
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
    return this.getQuery(`artists/${ id }/top-tracks`)
                .pipe(map((tracks :any)=> {
                  return tracks['tracks']
                }));
  }

  getNewReleases(){
    
    return this.getQuery('browse/new-releases')
               .pipe( map( (data : any) => data['albums'].items));
               
  }
  
}
