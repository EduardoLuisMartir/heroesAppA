import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IHeroes } from '../interfaces/heroes.interface';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  constructor(private http : HttpClient ) { }

  getHeroes():Observable<IHeroes[]>{
   return this.http.get<IHeroes[]>("http://localhost:3000/heroes")
  }

  getHeroe(id:string):Observable<IHeroes>{
    return this.http.get<IHeroes>("http://localhost:3000/heroes/"+id)
  }

  getSugerencias(termino:string):Observable<IHeroes[]>{
    return this.http.get<IHeroes[]>("http://localhost:3000/heroes?q="+termino+"&_limit=6");
  }

  guardarHeroe(heroe:IHeroes):Observable<IHeroes>{
    return this.http.post<IHeroes>("http://localhost:3000/heroes" , heroe);
  }

  editarHeroe(heroe:IHeroes):Observable<IHeroes>{
    return this.http.put<IHeroes>(`http://localhost:3000/heroes/${heroe.id}` , heroe);
  }

  eliminarHeroe(id:string):Observable<any>{
    return this.http.delete<any>(`http://localhost:3000/heroes/${id}`);
  }
}
