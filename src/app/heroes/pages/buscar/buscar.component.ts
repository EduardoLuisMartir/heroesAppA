import { Component } from '@angular/core';
import { IHeroes } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent {
  termino:string="";
  heroes:IHeroes[]=[];
  heroeSeleccionado!:IHeroes;

  constructor(private heroesService:HeroesService) { }

  buscando(){
    this.heroesService.getSugerencias(this.termino.trim())
    .subscribe((heroes)=>{
      this.heroes = heroes;
    })
  }

  opcionSeleccionada(event:MatAutocompleteSelectedEvent ){
      const heroe:IHeroes = event.option.value; 
      this.termino = heroe.superhero; 
      this.heroesService.getHeroe(heroe.id!)
      .subscribe((heroe=>{
        this.heroeSeleccionado = heroe;
      }))
  }
}
