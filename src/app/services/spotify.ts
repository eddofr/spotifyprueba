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
      'Authorization' : 'Bearer BQCmyxjoDVX2A5iud1sZMt1q7V9Kr4114n3lzizLe_1fuy41TlgDLCfv2_hswTZfgyJptYTvSMuhVsQeNs_sNN0LDX8yzcFrQs9MFETDIUx3Z1adihB_hCTeQZh810LLoHIUjBkKJvo'
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
