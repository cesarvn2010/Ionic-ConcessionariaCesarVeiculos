import { Injectable } from '@angular/core';
import { SQLiteObject } from '@ionic-native/sqlite';
import { DatabaseProvider } from '../database/database';

/*
  Generated class for the CategoryProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CategoryProvider {

  constructor(public dbProvider: DatabaseProvider) {
  }

  public getAll(){
    return this.dbProvider.getDB()
    .then((db: SQLiteObject) => {
      return db.executeSql('select * from categories', [])
      .then((data: any) => {
        if(data.rows.length > 0) {
          let categories: any[] = [];
          for (var i = 0; i < data.dows.length; i++){
            var category = data.rows.item(i);
            categories.push(category);
          }
          return categories;
        } else {
          return [];
        }
      })
      .catch((e) => console.error(e));
    })
    .catch((e) => console.error(e));
  }

}
