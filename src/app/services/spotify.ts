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
      'Authorization' : 'Bearer BQD-rCh17oGc8Sbl6g3BgriFBn08gI3REbwfBGn7Lhpd9sMc2BfDJuNXqb4-M2MKkW2HV1DmpG1A7difoC9fkp7Cz0yCyP-6knIfhA6QJhEIgCPe8xXxD_TUaz_sfTen3r3NcuDbaCQ'
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
