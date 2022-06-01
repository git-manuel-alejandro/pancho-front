import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';


const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  constructor(
    private http: HttpClient

  ) { }

  get token(): string {
    return localStorage.getItem('token') || '';
  }

  get headers() {
    return {
      headers: {
        'x-token': this.token
      }
    }
  }


  getPersonas() {
    return this.http.get(`${base_url}/personas`, this.headers)

  }

  getPersonasById(uid: string) {
    return this.http.get(`${base_url}/personas/${uid}`, this.headers)

  }

  creatPersonas(persona) {
    return this.http.post(`${base_url}/personas`, persona, this.headers)

  }

}
