import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {


  transform(items: any[], search: string): any[] {

    if (search === null || (typeof (search) === 'undefined')) {
      return items;
    }

    const response = [];
    search = search.toLowerCase();

    for (const item of items) {
      if (item.name.toLowerCase().includes(search) || item.patronus.toLowerCase().includes(search)) {
        response.push(item);
      }
    }

    return response;
  }

}
