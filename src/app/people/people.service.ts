import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
 
import { Observable, expand, EMPTY, reduce, of } from 'rxjs';
import { IPeople, IRestPeople } from './people.model';

/**
 * The people service.
 */
@Injectable({providedIn: 'root'})
export class PeopleService {
    /**
     * CTOR.
     */
    constructor(
        private http: HttpClient
    ){}

    /**
     * Fetch all the people from SWAPI.
     * Expand will help us call the nex observable and
     * reduce will help us fetching and concatenating the results which will
     * be merged into one observable by expand (recursivly).
     * @returns Observable of the list of people.
     */
    public getPeople(): Observable<IPeople[]> {
        return this.http.get<IRestPeople>('https://swapi.dev/api/people').pipe(
            expand(response => response.next ? this.http.get<IRestPeople>(response.next) : EMPTY),
            reduce((acc, current) => acc.concat(current.results), [] as IPeople[])
          );
    }
}