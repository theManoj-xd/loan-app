import { Pipe, PipeTransform } from '@angular/core';
 
@Pipe({
  name: 'evenodd',
  standalone: true
})
export class EvenoddPipe implements PipeTransform {
 
  transform(value: number): string{
    return value % 2 === 0 ? "Even" : "Odd";
  }
 
}