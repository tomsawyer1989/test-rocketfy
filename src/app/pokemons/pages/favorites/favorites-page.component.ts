import { Component, OnInit } from "@angular/core";

import { Pokemon } from "../../interfaces/pokemon.interface";

@Component({
    selector: 'app-favorites-page',
    templateUrl: './favorites-page.component.html'
})
export class FavoritesPageComponent implements OnInit {
    favorites: Pokemon[] = [];

    ngOnInit(): void {
        const favoritesStorage: any = localStorage.getItem('favorites');
        
        if (favoritesStorage) {
            this.favorites = JSON.parse(favoritesStorage);
        }
    }
}