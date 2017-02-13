// firstcharacter.pipe.ts

import { Pipe, PipeTransform } from "@angular/core";

@Pipe({name: "firstcharacter"})
export class FirstcharacterPipe implements PipeTransform {
  transform(value: string, args: string[]): any {
    if (!value) return value;
    return value.charAt(0).toUpperCase();
  }
}