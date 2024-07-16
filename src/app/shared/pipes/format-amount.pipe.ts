import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatAmount',
  standalone: true,
})
export class FormatAmountPipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): unknown {
    if (this.isStrNumeric(value)) {
      return `$${value} million`;
    }

    return value;
  }

  private isStrNumeric(value: string): boolean {
    const valueParsed = parseInt(value);

    if (typeof valueParsed === 'number' && !isNaN(valueParsed)) {
      return true;
    } else {
      return false;
    }
  }
}
