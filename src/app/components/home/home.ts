import { Component } from '@angular/core';
import { Spotify } from '../../services/spotify';
import { Tarjetas } from "../tarjetas/tarjetas";

@Component({
  selector: 'app-home',
  imports: [Tarjetas],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

  nuevasCanciones : any[] = []

  constructor( private spotify : Spotify ){
    spotify.getNewReleases().subscribe(data => {
        this.nuevasCanciones = data;
        //console.log(this.nuevasCanciones);
    });
  }

}
