import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../../environments/environment';
import { ICountry } from '../entities/country.model';

@Injectable({ providedIn: 'root' })
export class CountriesService {

  private readonly allRoute = '/all';
  constructor(private http: HttpClient) {}

  getCountries(): Observable<Array<ICountry>> {
    return this.http.get(`${environment.countriesAPIURL}${this.allRoute}`).pipe(
      map((countries: Array<ICountry>) => countries)
    );
  }
}
