import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatDuration',
  standalone: true,
})
export class FormatDurationPipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): unknown {
    const valueParsed = parseInt(value);
    const hours = Math.floor(valueParsed / 60);
    const minutes = valueParsed % 60;

    return `${hours}h ${minutes}min`;
  }
}
