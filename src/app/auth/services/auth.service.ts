import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Auth } from '../interfaces/auth.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _auth :Auth | undefined;

  constructor(private http:HttpClient) { }

  login():Observable<Auth>{
    return this.http.get<Auth>("http://localhost:3000/usuarios/1")
    .pipe(
      tap(auth=>{
        this._auth = auth
        localStorage.setItem('token' , auth.id.toString())
      })
    )
  }

  get auth():Auth{
    return {...this._auth!};
  }

  verificaAuth():Observable<boolean>{
    if(!localStorage.getItem('token'))
    {
      return of(false);
    }
    return this.http.get<Auth>("http://localhost:3000/usuarios/1")
    .pipe(
      map(
        auth =>{
          this._auth = auth;
          return true;
        }
      )
    )
  }
}
