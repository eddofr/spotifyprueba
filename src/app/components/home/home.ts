import { Component, ChangeDetectorRef } from '@angular/core';
import { Spotify } from '../../services/spotify';
import { Tarjetas } from "../tarjetas/tarjetas";
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  imports: [Tarjetas],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

  nuevasCanciones : any[] = []

  constructor( private spotify : Spotify, private cd: ChangeDetectorRef ){
    //this.spotify.getNewReleases().subscribe(data =>{
      // this.nuevasCanciones = data;
      // console.log(this.nuevasCanciones)
    //  });
   // console.log(this.nuevasCanciones)
  }

  ngOnInit(): void {
    this.spotify.getNewReleases().subscribe(data => {
      this.nuevasCanciones = data;
      //console.log(this.nuevasCanciones);
      this.cd.detectChanges();
    });
  }

}
