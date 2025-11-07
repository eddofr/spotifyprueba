import { ChangeDetectorRef, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Spotify } from '../../services/spotify';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-artista',
  imports: [],
  templateUrl: './artista.html',
  styleUrl: './artista.css'
})
export class Artista {

  artista : any = {};
  topTracks : any[] = [];

  constructor(private activatedRoute : ActivatedRoute,
              private _spotify : Spotify, private cd: ChangeDetectorRef, private sanitizer: DomSanitizer ){
                
              }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
                  this.getArtist(params['id']);
                  this.getTopTracks(params['id']);
                })
 
  }
  
  getArtist(id : any){
    this._spotify.getArtist(id).subscribe(art => {
      this.artista = art;
      console.log(this.artista);
      this.cd.detectChanges();
    })
  }

  getTopTracks(id : any){
    this._spotify.getTopTracks(id).subscribe(top => {
      console.log(top);
      this.topTracks = top;
      this.cd.detectChanges();
    } )
  }

}
