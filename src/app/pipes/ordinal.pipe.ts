import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ordinal'
})
export class OrdinalPipe implements PipeTransform {
  transform(value: number | string): string {
    if (!value || isNaN(Number(value))) {
      return '';
    }
    const num = Math.abs(Math.floor(Number(value))); // Ignore decimals and negatives for ordinal suffix
    const lastDigit = num % 10;
    const lastTwoDigits = num % 100;
    let suffix = 'th';
    if (lastTwoDigits < 11 || lastTwoDigits > 13) {
      switch (lastDigit) {
        case 1:
          suffix = 'st';
          break;
        case 2:
          suffix = 'nd';
          break;
        case 3:
          suffix = 'rd';
          break;
      }
    }
    return `${value}${suffix}`;
  }
}
