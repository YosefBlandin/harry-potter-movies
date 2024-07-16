import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatDuration',
  standalone: true,
})
export class FormatDurationPipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): string {
    const valueParsed: number = parseInt(value);
    const hours: number = Math.floor(valueParsed / 60);
    const minutes: number = valueParsed % 60;

    return `${hours}h ${minutes}min`;
  }
}
