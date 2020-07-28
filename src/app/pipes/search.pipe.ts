import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(items: any[],type: any ,value: any): any {
    if (!items || !value || value === 'Todos') {
        return items;
    }
    
    if (type === 'tittle') {
      console.log(value);
      return items.filter(
        (item)=> item.tittle
      .normalize('NFD')
      .replace(/([^n\u0300-\u036f]|n(?!\u0303(?![\u0300-\u036f])))[\u0300-\u036f]+/gi,"$1")
      .normalize()
      .toLowerCase()
      .includes(
        (value
          .normalize('NFD')
          .replace(/([^n\u0300-\u036f]|n(?!\u0303(?![\u0300-\u036f])))[\u0300-\u036f]+/gi,"$1")
          .normalize()
          .toLowerCase())
      ));
    } else if (type === 'year') {
      return items.filter((item)=> item.year.toLowerCase().includes((value.toLowerCase())));
    } else if (type === 'gender') {
      return items.filter(
        (item)=> item.gender
      .normalize('NFD')
      .replace(/([^n\u0300-\u036f]|n(?!\u0303(?![\u0300-\u036f])))[\u0300-\u036f]+/gi,"$1")
      .normalize()
      .toLowerCase()
      .includes(
        (value
          .normalize('NFD')
          .replace(/([^n\u0300-\u036f]|n(?!\u0303(?![\u0300-\u036f])))[\u0300-\u036f]+/gi,"$1")
          .normalize()
          .toLowerCase())
      ));
    } else if (type.toLowerCase() === 'estrenos') {
      
      let count = 4;
      return items.filter(function (item,index) {
        
        if(index == (items.length-count) && count != 0) {
          count--;
          return item;
        }
      })
    
    } else if (type.toLowerCase() === 'recomendadas') {
      return items.filter((item)=> item.qualification >= "8.0");
    } else if (type.toLowerCase() === 'peliculas') {
      return items.filter((item)=> item.qualification < "8.0");
    } else if (type.toLowerCase() === 'series') {
      return items.filter((item)=> item.qualification >= "89.0");
    }
  } 

}
