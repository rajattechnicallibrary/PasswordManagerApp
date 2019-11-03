import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { SQLitePorter } from '@ionic-native/sqlite-porter/ngx';
import { Platform } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { LoggerService } from './logger.service';
declare var window;


export interface Dev {
  id: number,
  name: string,
  color: string
}

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  db: any;
  private dbReady: BehaviorSubject<boolean> = new BehaviorSubject(false);
  developers = new BehaviorSubject([]);
  products = new BehaviorSubject([]);
  hasCordova: any = false;
  fileName: any = 'database';
  constructor(
    private sqlite: SQLite,
    private sqlitePorter: SQLitePorter,
    private http: HttpClient,
    private platform: Platform,
    private log: LoggerService
  ) {
    if (this.platform.is('cordova')) {
      this.hasCordova = true;
    }
    this.initDB();

  }

  initDB() {
    if (this.hasCordova) {
      try {
        this.sqlite.create({
          name: 'passwordDB.db',
          location: 'default'
        }).then((db: SQLiteObject) => {
          this.db = db;
          console.log(this.db);
          this.seeddb();
        });
      } catch (error) {
        this.log.log(this.fileName, "initDB", JSON.stringify(error));
      }
    }

  }
  seeddb() {
    try {
      this.http.get('assets/initDB.sql', { responseType: 'text' })
        .subscribe(sql => {
          this.sqlitePorter.importSqlToDb(this.db, sql)
            .then(_ => {
              this.loadDevelopers();
              this.dbReady.next(true);
            })
            .catch(e => console.error(e));

        });

    } catch (error) {
      this.log.log(this.fileName, "initDB", error);
    }
  }

  getdbState() {
    return this.dbReady.asObservable();
  }

  getDevs(): Observable<Dev[]> {
    return this.developers.asObservable();
  }

  getProducts(): Observable<any[]> {
    return this.products.asObservable();
  }


  loadDevelopers() {
    //  this.log.log(this.fileName, "initDB", JSON.stringify("error"));
    let newData = this.db.executeSql('SELECT * FROM category', []).then(data => {
      let developers: Dev[] = [];
      if (data.rows.length > 0) {
        for (var i = 0; i < data.rows.length; i++) {
          console.log(JSON.stringify(data.rows.item(i)));
          developers.push({
            id: data.rows.item(i).id,
            name: data.rows.item(i).name,
            color: data.rows.item(i).color
          });
        }
      }
      this.developers.next(developers);
      console.log(this.developers);
    });
    this.sqlitePorter.exportDbToJson(this.db)
      .then((json) => {
        console.log("70 JSON: " + json);
      })
      .catch(e => console.error(e));
    this.sqlitePorter.exportDbToSql(this.db)
      .then((json) => {
        console.log("75 JSON: " + json);
      })
      .catch(e => console.error(e));
    return newData;
  }

  public insertData(query, queryParams, functionName) {
    return new Promise((resolve, reject) => {
      this.db.transaction((transaction) => {
        transaction.executeSql(query, queryParams, (tx, res) => {
          resolve(res.insertId);
        }, (tx, error) => {
          this.log.log(this.fileName, functionName, 'Error: ' + JSON.stringify(error.message));
          reject(error);
        });
      }, (error) => {
        this.log.log(this.fileName, functionName, 'Error TXN: ' + JSON.stringify(error.message));
        reject(error);
      });
    });
  }

  public getList(query, queryParams, functionName): Promise<JSON[]> {
    return new Promise((resolve, reject) => {
      this.db.transaction((tx) => {
        tx.executeSql(query, queryParams, ((tx, rs) => {
          let resultArray = [];
          if (rs.rows.length > 0) {
            for (let i = 0; i < rs.rows.length; i++) {
              let item = rs.rows.item(i);
              resultArray.push(item);
            }
          }
          resolve(resultArray);
        }), ((tx, error) => {
          reject(error);
        }));
      }, (error) => {
        this.log.log(this.fileName, functionName, 'Error TXN: ' + JSON.stringify(error.message));
        reject(error);
      });
    });
  }


}