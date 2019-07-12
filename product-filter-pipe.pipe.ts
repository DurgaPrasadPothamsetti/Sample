import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'productFilterPipe'
})
export class ProductFilterPipePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return value.filter((data) => data.productName.toLowerCase().indexOf(args) !==-1);
  }

}
