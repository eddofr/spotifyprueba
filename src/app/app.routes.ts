import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Search } from './components/search/search';
import { Artista } from './components/artista/artista';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path : 'home', component : Home},
    { path : 'search', component : Search},
    { path : 'artist/:id', component : Artista},
    { path : '**', pathMatch : 'full', redirectTo :'home'}
];
