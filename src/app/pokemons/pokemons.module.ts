import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokemonsRoutingModule } from './pokemons-routing.module';

import { HomePageComponent } from './pages/home/home-page.component';
import { DetailsPageComponent } from './pages/details/details-page.component';

@NgModule({
    declarations: [
        HomePageComponent,
        DetailsPageComponent
    ],
    imports: [
        CommonModule,
        PokemonsRoutingModule
    ]
})
export class PokemonsModule { }