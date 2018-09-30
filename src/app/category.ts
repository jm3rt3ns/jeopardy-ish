import { QaPair } from "./qa-pair";

export class Category {

    constructor(
        public name: string,
        public qaList: QaPair[]
      ) {  }

    findIndexToUpdate(category: Category): boolean { 
    return category.name === this.name;
    }
}
