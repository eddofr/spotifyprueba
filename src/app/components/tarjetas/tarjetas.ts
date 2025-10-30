import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tarjetas',
  imports: [],
  templateUrl: './tarjetas.html',
  styleUrl: './tarjetas.css'
})
export class Tarjetas {

  constructor( private router : Router){}

  @Input() items : any[] = [];

  verArtista(item : any){
    let artistId;
    console.log(item.artists[0].id)
    if(item.type === 'artist'){
      artistId = item.id;
    }else{
      artistId = item.artists[0].id;
    }
    this.router.navigate(['/artist', artistId])
  }
}
