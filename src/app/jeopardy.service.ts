import { Injectable } from '@angular/core';
import { Category } from './category';
import { QaPair } from './qa-pair';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'; 

@Injectable({
  providedIn: 'root'
})
export class JeopardyService {

  categories: Category[] = [];

  constructor(private http: HttpClient) {
    this.http = http;
   }

  createCategories(rawText) {
    //reset the categories
    this.categories = [];

    //TODO: try catch
    var categories = rawText.split('#');
    categories.splice(0, 1);

    categories.map(rawCategory => {
      if(rawCategory!=='') {
        let lines = rawCategory.split('\n');

        let qaList = [];
        for(var i = 1; i < lines.length; i++) {
          console.log(lines[i].trim().substring(0, 1));
          if(lines[i].trim().substring(0, 1)=='-' && lines[i+1].trim().substring(0, 1)=='>') {
            qaList.push(new QaPair(lines[i].trim().slice(1,lines[i].trim().length), lines[i+1].trim().slice(1,lines[i+1].trim().length)));
          }
        }

        this.categories.push(new Category(lines[0], qaList));
      }
    });
  }

  getCategories(): Category[] {
    return this.categories;
  }

  getCategoryByName(name: string): Category {
    return this.categories.find(category => { return category.name === name });
  }

  public updateCategory(category: Category): void {
    let updateItem = this.categories.find(aCategory => {
      return aCategory.findIndexToUpdate(category)
      });
    let index = this.categories.indexOf(updateItem);
    this.categories[index] = category;
  }

  public getMarkdown(): Observable<any> {
    return this.http.get('./assets/catechism.md', {responseType: 'text'});
  }
}
