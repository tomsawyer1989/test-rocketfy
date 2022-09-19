import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";

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

    getPokemon (url: string): Observable<any> {
        return this.http.get<any>(url);
    }

    getDescription (id: number): Observable<any> {
        const url = `${ this.apiUrl }-species/${ id }`;
        return this.http.get<any>(url);
    }
}