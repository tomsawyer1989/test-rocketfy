import { Component, OnInit } from "@angular/core";
import { lastValueFrom } from "rxjs";
import { PokemonsService } from "../../services/pokemons.service";

import { Pokemon } from "../../interfaces/pokemon.interface";

@Component({
    selector: 'app-home-page',
    templateUrl: './home-page.component.html'
})
export class HomePageComponent implements OnInit {
    pokemons: Pokemon[] = [];

    constructor(private pokemonsServices: PokemonsService) { }

    ngOnInit(): void {
        this.getPokemonsList();
    }

    async getPokemonsList() {
        const data = await lastValueFrom(this.pokemonsServices.getPokemonsList());
        const list: Pokemon[] = [];

        data.results.forEach(async (item: any) => {
            const pokemon = await lastValueFrom<Pokemon>(this.pokemonsServices.getPokemon(item.url));
            list.push(pokemon);
        });

        this.pokemons = list;
    }
}