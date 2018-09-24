import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Client } from './client';
import { catchError, map, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class XinServiceService {

  constructor(private http: HttpClient) {  }

  private heroesUrl = 'api/clients';  // URL to web api

  searchTextSubject: Subject<boolean> = new Subject<boolean> ();
  searchText: string;
  clients: Client[] = [];

  setSearchText(text: string) {
    this.searchText = text;
    this.searchTextSubject.next(true);
  }

  getClientsAsync ():  Observable < Client[] > {
    return this.http.get<Client[]>(this.heroesUrl).pipe(
      tap(clients => console.log('fetched clients')),
      tap(clients => console.log(clients)),
      catchError(this.handleError('getHeroes', []))
    );
  }

  getClients() {
    return this.getClientsAsync();
  }

    /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
