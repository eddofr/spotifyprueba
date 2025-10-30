import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Spotify } from '../../services/spotify';
import { NoimagePipe } from "../../pipes/noimage-pipe";

@Component({
  selector: 'app-artista',
  imports: [NoimagePipe],
  templateUrl: './artista.html',
  styleUrl: './artista.css'
})
export class Artista {

  artista : any = {};
  topTracks : any[] = [];

  constructor(private activatedRoute : ActivatedRoute,
              private _spotify : Spotify ){
                this.activatedRoute.params.subscribe(params => {
                  this.getArtist(params['id']);
                  this.getTopTracks(params['id']);
                })
              }
  
  getArtist(id : any){
    this._spotify.getArtist(id).subscribe(art => {
      this.artista = art;
      console.log(this.artista)
    })
  }

  getTopTracks(id : any){
    this._spotify.getTopTracks(id).subscribe(top => {
      console.log(top);
      this.topTracks = top;
    } )
  }

}
