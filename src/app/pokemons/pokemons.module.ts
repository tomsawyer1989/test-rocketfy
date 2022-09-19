import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokemonsRoutingModule } from './pokemons-routing.module';

import { HomePageComponent } from './pages/home/home-page.component';
import { DetailsPageComponent } from './pages/details/details-page.component';
import { FavoritesPageComponent } from './pages/favorites/favorites-page.component';
import { CardPokemonComponent } from './components/card-pokemon/card-pokemon.component';

@NgModule({
    declarations: [
        HomePageComponent,
        DetailsPageComponent,
        FavoritesPageComponent,
        CardPokemonComponent
    ],
    imports: [
        CommonModule,
        PokemonsRoutingModule
    ]
})
export class PokemonsModule { }