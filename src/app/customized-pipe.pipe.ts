import { Pipe, PipeTransform } from '@angular/core';
import {Item} from './item';

@Pipe({
  name: 'customizedPipe',
  pure: false,
})
export class CustomizedPipePipe implements PipeTransform {

  transform(item: Item, args?: any): any {
    if (item.done) {
      return '已完成';
    } else {
      return '未完成';
    }
  }
  // normal way
  // transform(value: boolean, args?: any): any {
  //   if (value) {
  //     return '已完成';
  //   } else {
  //     return '未完成';
  //   }
  // }
}
