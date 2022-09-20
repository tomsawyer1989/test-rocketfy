import { Component, OnInit } from "@angular/core";
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { lastValueFrom } from "rxjs";
import { PokemonsService } from "../../services/pokemons.service";

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

    constructor(private route: ActivatedRoute,
        private pokemonsServices: PokemonsService,
        private _location: Location) { }

    ngOnInit(): void {
        this.route.params.subscribe(async (params: any) => {
            this.id = params.id;
            this.name = params.name;
            this.height = params.height;
            this.weight = params.weight;
            this.types = JSON.parse(params.types);
            this.image = params.image;

            const response = await lastValueFrom(this.pokemonsServices.getDescription(this.id));
            const data = response.flavor_text_entries.filter((item: any) => item.language.name === 'es')[0];
            this.description = data.flavor_text;
        });
    }

    backClicked() {
        this._location.back();
    }
}