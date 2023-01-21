import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';
import { IHeroes } from '../../interfaces/heroes.interface';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {
  heroe!:IHeroes;

  constructor(private activatedRoute:ActivatedRoute ,private router:Router , private heroeService:HeroesService) {}

  ngOnInit(): void {
    this.activatedRoute.params
    .subscribe((param)=>{
      this.heroeService.getHeroe(param["id"])
      .subscribe((heroe)=>{
        setTimeout(() => {
          this.heroe = heroe;
        }, 3000);
      })
    })
  }

  regresar(){
    this.router.navigate(["heroes/listado"]);
  }
}
