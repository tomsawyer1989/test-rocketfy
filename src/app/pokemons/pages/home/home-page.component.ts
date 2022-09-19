import { Component, OnInit } from "@angular/core";
import { lastValueFrom } from "rxjs";
import { PokemonsService } from "../../services/pokemons.service";

@Component({
    selector: 'app-home-page',
    templateUrl: './home-page.component.html'
})
export class HomePageComponent implements OnInit {
    pokemons: any[] = [];

    constructor(private pokemonsServices: PokemonsService) { }

    ngOnInit(): void {
        this.getPokemonsList();
    }

    async getPokemonsList() {
        const data = await lastValueFrom(this.pokemonsServices.getPokemonsList());
        const list: any = [];

        data.results.forEach(async (item: any) => {
            const pokemon = await lastValueFrom(this.pokemonsServices.getPokemon(item.url));
            list.push(pokemon);
        });

        this.pokemons = list;
    }
}