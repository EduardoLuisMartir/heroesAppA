import { Pipe, PipeTransform } from '@angular/core';
import { IHeroes } from '../interfaces/heroes.interface';

@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {

  transform(value: IHeroes): string {
    return `assets/heroes/${value.id}.jpg`;
  }

}
