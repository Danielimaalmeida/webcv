import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

import { ICountry } from '../entities/country.model';
import { CountriesService } from './../services/countries.service';


@Injectable({ providedIn: 'root' })
export class CountriesFacade {

  countrySubject = new BehaviorSubject<ICountry[]>([]);
  countries$ = this.countrySubject.asObservable();

  constructor(private countryService: CountriesService) {}

  getCountries(): void {
    this.countryService.getCountries().subscribe((countries: Array<ICountry>) => this.countrySubject.next(countries));
  }
}
