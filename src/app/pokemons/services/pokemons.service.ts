import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class PokemonsService {
    private apiUrl: string = 'https://pokeapi.co/api/v2/pokemon';

    // get httpParams () {
    //     return new HttpParams().set('fields', 'name,capital,alpha2Code,flag,population');
    // }

    constructor (private http: HttpClient) {}

    getPokemons (): Observable<any[]> {
        const url = `${ this.apiUrl }?limit=20`;

        // return this.http.get<any[]>(url, { params: this.httpParams });
        return this.http.get<any[]>(url);
    }
}