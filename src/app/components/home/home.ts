import { Component } from '@angular/core';
import { Spotify } from '../../services/spotify';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

  nuevasCanciones : any[] = []

  constructor( private spotify : Spotify ){
    spotify.getNewReleases().subscribe(data => {
        this.nuevasCanciones = data;
    });
  }

}
