import { Component, Input } from "@angular/core";

@Component({
    selector: 'app-card-pokemon',
    templateUrl: './card-pokemon.component.html'
})
export class CardPokemonComponent {
    @Input() pokemons: any[] = [];
}