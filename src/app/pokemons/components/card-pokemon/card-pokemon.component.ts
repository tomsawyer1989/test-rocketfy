import { Component, OnInit, Input } from "@angular/core";
import { Router } from '@angular/router';

import { Pokemon } from "../../interfaces/pokemon.interface";

@Component({
    selector: 'app-card-pokemon',
    templateUrl: './card-pokemon.component.html'
})
export class CardPokemonComponent implements OnInit {
    @Input() pokemons: Pokemon[] = [];
    favorites: Pokemon[] = [];

    constructor(private router: Router) {}

    ngOnInit(): void {
        const favoritesStorage: any = localStorage.getItem('favorites');
        
        if (favoritesStorage) {
            this.favorites = JSON.parse(favoritesStorage);
        }
    }

    navigateTo(pokemon: Pokemon) {
        this.router.navigate(['/details', { pokemon: JSON.stringify(pokemon) }]);
    }

    validateFavorites(pokemon: Pokemon): boolean {
        return this.favorites.some((item: Pokemon) => item.id === pokemon.id);
    }

    addRemoveFavorites(pokemon: Pokemon) {
        if (!this.validateFavorites(pokemon)) {
            this.favorites = [...this.favorites, pokemon];
        }
        else {
            this.favorites = this.favorites.filter((item: Pokemon) => item.id !== pokemon.id);
        }
        
        localStorage.setItem('favorites', JSON.stringify(this.favorites));
    }
}