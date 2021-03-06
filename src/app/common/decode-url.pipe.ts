import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "decodeUrl"
})
export class DecodeUrlPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    return encodeURIComponent(value);
  }
}

//this pipe is just for test