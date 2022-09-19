import { Component, Input } from "@angular/core";
import { Router } from '@angular/router';

@Component({
    selector: 'app-card-pokemon',
    templateUrl: './card-pokemon.component.html'
})
export class CardPokemonComponent {
    @Input() pokemons: any[] = [];

    constructor(private router: Router) {}

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
}