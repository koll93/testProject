import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {url} from '../../url';
import {IntProfile, IntUserrole} from './interface';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient) {}

  getProfile() {
    return this.http.get<IntProfile>(`${url}/profile`);
  }

  getRole() {
    return this.http.get<IntUserrole>(`${url}/userroles`);
  }
}
