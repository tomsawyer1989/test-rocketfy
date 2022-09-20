import { Component, OnInit } from "@angular/core";
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { lastValueFrom } from "rxjs";
import { PokemonsService } from "../../services/pokemons.service";

import { Pokemon } from "../../interfaces/pokemon.interface";

@Component({
    selector: 'app-details-page',
    templateUrl: './details-page.component.html'
})
export class DetailsPageComponent implements OnInit {
    id: number = 0;
    name: string = '';
    height: number = 0;
    weight: number = 0;
    types: any[] = [];
    image: string = '';
    description: any = null;
    favorites: Pokemon[] = [];

    constructor(private route: ActivatedRoute,
        private pokemonsServices: PokemonsService,
        private _location: Location) { }

    ngOnInit(): void {
        const favoritesStorage: any = localStorage.getItem('favorites');
        
        if (favoritesStorage) {
            this.favorites = JSON.parse(favoritesStorage);
        }

        this.route.params.subscribe(async (params: any) => {
            const pokemon = JSON.parse(params.pokemon);

            this.id = pokemon.id;
            this.name = pokemon.name;
            this.height = pokemon.height;
            this.weight = pokemon.weight;
            this.types = pokemon.types;
            this.image = pokemon.sprites.other['official-artwork'].front_default;

            const response = await lastValueFrom(this.pokemonsServices.getDescription(this.id));
            const data = response.flavor_text_entries.filter((item: any) => item.language.name === 'es')[0];
            this.description = data.flavor_text;
        });
    }

    backClicked() {
        this._location.back();
    }

    validateFavorites(id: number): boolean {
        return this.favorites.some((item: Pokemon) => item.id === id);
    }
}