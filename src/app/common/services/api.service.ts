import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Character } from '../classes/character';
import { Info } from '../classes/info';
import { BaseResponse } from '../interfaces/base-response';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  readonly baseUrl = 'https://rickandmortyapi.com/api/';

  readonly charactersUrl = `${this.baseUrl}character/`;

  constructor(
    private http: HttpClient
  ) { }

  getCharacters (urlToFetchData?: string): Observable<BaseResponse> {
    let url = this.charactersUrl;
    if (urlToFetchData) {
      url = urlToFetchData;
    }
    return this.http.get<BaseResponse>(url)
      .pipe(
        tap(
          characters => console.log(`fetched characters`),
          error => console.log(`error -> ${error}`))); }

  getCharactersFiltered (labelToFilter, textToFilter): Observable<BaseResponse> {
    const url = `${this.charactersUrl}?${labelToFilter}=${textToFilter}`;
    return this.http.get<BaseResponse>(url)
      .pipe(
        tap(
          characters => console.log(`fetched characters filtered`),
          error => console.log(`error -> ${error}`))); }

  getCharacter(id: number): Observable<Character> {
    const url = `${this.charactersUrl}${id}`;
    return this.http.get<Character>(url).pipe(
      tap(
        _ => console.log(`fetched character id=${id}`),
        error => console.log(`error -> ${error}`))); }

}
