import { Component, OnInit, Input } from "@angular/core";
import { Router } from '@angular/router';

@Component({
    selector: 'app-card-pokemon',
    templateUrl: './card-pokemon.component.html'
})
export class CardPokemonComponent implements OnInit {
    @Input() pokemons: any[] = [];
    favorites: any[] = [];

    constructor(private router: Router) {}

    ngOnInit(): void {
        const favoritesStorage: any = localStorage.getItem('favorites');
        
        if (favoritesStorage) {
            this.favorites = JSON.parse(favoritesStorage);
        }
    }

    navigateTo(pokemon: any) {
        this.router.navigate(['/details',
            {
                id: pokemon.id,
                name: pokemon.name,
                height: pokemon.height,
                weight: pokemon.weight,
                types: JSON.stringify(pokemon.types),
                image: pokemon.sprites.other['official-artwork'].front_default
            }
        ]);
    }

    validateFavorites(pokemon: any): boolean {
        return this.favorites.some((item: any) => item.id === pokemon.id);
    }

    addRemoveFavorites(pokemon: any) {
        if (!this.validateFavorites(pokemon)) {
            this.favorites = [...this.favorites, pokemon];
        }
        else {
            this.favorites = this.favorites.filter((item: any) => item.id !== pokemon.id);
        }
        
        localStorage.setItem('favorites', JSON.stringify(this.favorites));
    }
}