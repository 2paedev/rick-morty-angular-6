import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { catchError, map, tap } from "rxjs/operators";

import { Character } from "../../character/common/character";
import { IBaseResponse } from "../../common/interfaces/base-response";

const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json" })
};

@Injectable({
  providedIn: "root"
})
export class CharacterApiService {
  readonly baseUrl = "https://rickandmortyapi.com/api/";

  readonly charactersUrl = `${this.baseUrl}character/`;

  constructor(private http: HttpClient) {}

  getCharacters(urlToFetchData?: string): Observable<IBaseResponse> {
    let url = this.charactersUrl;
    if (urlToFetchData) {
      url = urlToFetchData;
    }
    return this.http
      .get<IBaseResponse>(url)
      .pipe(
        tap(
          characters => console.log(`fetched characters`),
          error => console.log(`error -> ${error}`)
        )
      );
  }

  getCharactersPaginated(pageNumber: number): Observable<IBaseResponse> {
    const url = `${this.charactersUrl}?page=${pageNumber + 1}`;
    return this.http
      .get<IBaseResponse>(url)
      .pipe(
        tap(
          characters => console.log(`fetched characters`),
          error => console.log(`error -> ${error}`)
        )
      );
  }

  getCharactersFiltered(
    labelToFilter,
    textToFilter
  ): Observable<IBaseResponse> {
    const url = `${this.charactersUrl}?${labelToFilter}=${textToFilter}`;
    return this.http
      .get<IBaseResponse>(url)
      .pipe(
        tap(
          characters => console.log(`fetched characters filtered`),
          error => console.log(`error -> ${error}`)
        )
      );
  }

  getCharacter(id: number): Observable<Character> {
    const url = `${this.charactersUrl}${id}`;
    return this.http
      .get<Character>(url)
      .pipe(
        tap(
          _ => console.log(`fetched character id=${id}`),
          error => console.log(`error -> ${error}`)
        )
      );
  }
}
