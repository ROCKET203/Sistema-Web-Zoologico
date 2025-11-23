import { Routes } from '@angular/router';
import { Inicio } from './page/inicio/inicio';
import { Zoologico } from './page/zoologico/zoologico';
import { Animal } from './page/animal/animal';
import { Traslado } from './page/traslado/traslado';
import { Especie } from './page/especie/especie';


export const routes: Routes = [
    { path: '', component: Inicio },
{ path: 'zoologico', component: Zoologico },
{ path: 'animal', component: Animal },
{ path: 'traslado', component: Traslado },
{ path: 'especie', component: Especie },

];
