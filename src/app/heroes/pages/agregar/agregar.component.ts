import { Component, OnInit } from '@angular/core';
import { IHeroes, Publisher } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css'],
})
export class AgregarComponent implements OnInit{

  ngOnInit(): void {
    
    if(!this.routes.url.includes('editar')) return;

    this.routeService.params
    .subscribe((params)=>{
      this.heroeService.getHeroe(params["id"])
      .subscribe((heroe)=>{
        this.heroe = heroe;
      })
    })
  }

  publishers = [
    {
      id: 'DC Comics',
      desc: 'DC - Comics',
    },
    {
      id: 'Marvel Comics',
      desc: 'Marvel - Comics',
    },
  ];

  heroe: IHeroes = {
    superhero : '' ,
    alter_ego : '' ,
    characters : '' ,
    first_appearance:'',
    publisher :Publisher.DCComics ,
    alt_img:'' ,
  }

  guardar(){
    if(this.heroe.superhero.trim().length === 0 ) return

    if(this.heroe.id){
      this.heroeService.editarHeroe(this.heroe)
      .subscribe((resp)=>{
        console.log(resp)
      })
    }else{
      this.heroeService.guardarHeroe(this.heroe)
      .subscribe((heroe)=>{
        this.routes.navigate(["/heroes/editar",heroe.id])
      })
    }
  }

  borrar(){
    this.heroeService.eliminarHeroe(this.heroe.id!)
    .subscribe((resp)=>{
      this.routes.navigate(['/heroes']);
    })
  }

  constructor(private heroeService:HeroesService , private routeService : ActivatedRoute , private routes:Router ) { }
}
