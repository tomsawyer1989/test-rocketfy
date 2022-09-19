import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";

import { Description, Pokemon } from "../interfaces/pokemon.interface";

@Injectable({
    providedIn: 'root'
})
export class PokemonsService {
    private apiUrl: string = 'https://pokeapi.co/api/v2/pokemon';

    constructor (private http: HttpClient) {}

    getPokemonsList (): Observable<any> {
        const url = `${ this.apiUrl }?limit=20`;

        return this.http.get<any>(url);
    }

    getPokemon (url: string): Observable<Pokemon[]> {
        // const params = new HttpParams().set('fields', 'id,name,height,weight,sprites');

        return this.http.get<Pokemon[]>(url);
    }

    getDescription (id: number): Observable<Description[]> {
        const url = `${ this.apiUrl }-species/${ id }`;
        // const params = new HttpParams().set('fields', 'flavor_text_entries');

        return this.http.get<Description[]>(url);
    }
}