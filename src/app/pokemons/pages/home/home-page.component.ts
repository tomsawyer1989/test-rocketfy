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
    dataLength: number = 0;
    limit: number = 10;
    offset: number = 0;

    constructor(private pokemonsServices: PokemonsService) { }

    ngOnInit(): void {
        this.getPokemonsList();
    }

    async getPokemonsList() {
        const data = await lastValueFrom(this.pokemonsServices.getPokemonsList(this.limit, this.offset));

        const listPromises = data.results.map(async (item: any) => {
            return await lastValueFrom<Pokemon>(this.pokemonsServices.getPokemon(item.url));
        });

        const list = await Promise.all(listPromises);

        this.pokemons = this.pokemons.concat(list);
        this.dataLength = data.count;
    }

    onScroll() {
        if (this.dataLength == this.pokemons.length) {return;}
    
        this.offset = this.offset + 10;

        this.getPokemonsList();
    }
}