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
    pokemon!: Pokemon;
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
            this.pokemon = { ...pokemon };
            
            const response = await lastValueFrom(this.pokemonsServices.getDescription(this.pokemon.id));
            const data = response.flavor_text_entries.filter((item: any) => item.language.name === 'es')[0];
            this.description = data.flavor_text;
        });
    }

    backClicked() {
        this._location.back();
    }

    validateFavorites(pokemon: Pokemon): boolean {
        return this.favorites.some((item: Pokemon) => item.id === pokemon.id);
    }

    addFavorites(pokemon: Pokemon) {
        this.favorites = [...this.favorites, pokemon];
        
        localStorage.setItem('favorites', JSON.stringify(this.favorites));
    }
}