import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";

import { Pokemon } from "../interfaces/pokemon.interface";

@Injectable({
    providedIn: 'root'
})
export class PokemonsService {
    private apiUrl: string = 'https://pokeapi.co/api/v2/pokemon';

    constructor (private http: HttpClient) {}

    getPokemonsList (limit: number, offset: number): Observable<any> {
        const url = `${ this.apiUrl }?limit=${ limit }&offset=${ offset }`;
        return this.http.get<any>(url);
    }

    getPokemon (url: string): Observable<Pokemon> {
        return this.http.get<Pokemon>(url);
    }

    getDescription (id: number): Observable<any> {
        const url = `${ this.apiUrl }-species/${ id }`;
        return this.http.get<any>(url);
    }
}