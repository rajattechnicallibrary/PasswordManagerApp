import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { SQLitePorter } from '@ionic-native/sqlite-porter/ngx';
import { Platform } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { LoggerService } from './logger.service';
import * as moment from 'moment';

declare var window;

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  private dbReady: BehaviorSubject<boolean> = new BehaviorSubject(false);
  developers = new BehaviorSubject([]);
  products = new BehaviorSubject([]);
  items: any[] = [];
  hasCordova: any = false;
  fileName: any = 'database';
  versionDb: any;
  public dbName = 'plocker.sqlite';
  public versionDBName = 'plocker.sqlite';
  private db: SQLiteObject;


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
    //this.initDB();

  }


  /**
  * 08/2/2018 Gurkirat Singh
  * Gets the database file name
  * @memberOf DatabaseProvider
  */
  getDbName() {
    return this.dbName;
  }

  getVersionDbName() {
    return this.versionDBName;
  }

  getDB() {
    if (!this.db) {
      this.log.log(this.fileName, 'getDB', "Opening DB...");
      if (this.platform.is('cordova')) {
        this.db = window.sqlitePlugin.openDatabase({ name: this.dbName, location: 'default' });
      } else {
        this.db = window.openDatabase(this.dbName, '1', 'Emerson', 1024 * 1024 * 100);
      }
    }
    return this.db;
  }

  InitQueryAtStartUp() {
    try {
      this.http.get('assets/initDB.sql', { responseType: 'text' })
        .subscribe(sql => {

          this.sqlitePorter.importSqlToDb(this.db, sql)
            .then(_ => {
              console.log("Imported InitDB.sql")
              this.dbReady.next(true);
            })
            .catch(e => console.error(e));

        });

    } catch (error) {
      this.log.log(this.fileName, "initDB", JSON.stringify(error));
    }
  }

  deleteAllDataFromTable() {
    //alert("rs");
    let versionData = [];
    return new Promise((resolve, reject) => {
      let query = '';
      query = "DELETE from user";
      this.getDB().transaction((tx) => {
        tx.executeSql(query, [], ((tx, rs) => {
          //alert(rs);
          resolve(rs);
        }), ((tx, error) => {
          this.log.log(this.fileName, 'deleteAllDataFromTable', 'Error : ' + JSON.stringify(error));
          reject(error);
        }));
      });
    });
  }

  getItem(id?) {
    let versionData = [];
    return new Promise((resolve, reject) => {
      let query = '';
      if (id) query = "Select * from user where id = " + id + "ORDER BY id DESC LIMIT 1";
      query = "Select * from user ORDER BY id DESC LIMIT 1";

      this.getDB().transaction((tx) => {
        tx.executeSql(query, [], ((tx, rs) => {
          if (rs.rows.length != 0) {
            versionData = rs.rows.item(0)
          }

          //alert("108", versionData);
          resolve(versionData);
        }), ((tx, error) => {
          this.log.log(this.fileName, 'getItem', 'Error : ' + JSON.stringify(error));
          reject(error);
        }));
      });
    });
  }

  registerUser(user?) {
    let versionData = [];
    return new Promise((resolve, reject) => {
      let query = '';
      let insertValues = [];
      query = "INSERT INTO user(master_password, email, created_date) VALUES (?,?,?)";
      insertValues.push(user.password);
      insertValues.push(user.email);
      insertValues.push(this.setDate());
      this.getDB().transaction((tx) => {
        tx.executeSql(query, insertValues, ((tx, rs) => {
          //alert("139", rs.rowsAffected);
          resolve(rs.rowsAffected);
        }), ((tx, error) => {
          this.log.log(this.fileName, 'registerUser', 'Error : ' + JSON.stringify(error));
          reject(error);
        }));
      });
    });
  }


  checkUser(password) {
    let versionData = [];
    return new Promise((resolve, reject) => {
      let query = '';
      query = "Select * from user where master_password = " + password;
      this.getDB().transaction((tx) => {
        tx.executeSql(query, [], ((tx, rs) => {
          if (rs.rows.length != 0) {
            versionData = rs.rows.item(0)
          }
          resolve(versionData);
        }), ((tx, error) => {
          this.log.log(this.fileName, 'getItem', 'Error : ' + JSON.stringify(error));
          reject(error);
        }));
      });
    });
  }


  getCategories(data?) {
    let versionData = [];
    return new Promise((resolve, reject) => {
      let query = '';
      query = "Select COUNT(pwd.id) as totalpassword, ca.* from categories as ca LEFT JOIN password as pwd ON pwd.cat_id = ca.id group by ca.id";
      this.getDB().transaction((tx) => {
        tx.executeSql(query, [], ((tx, rs) => {
          let rowLength = rs.rows.length;
          for (let i = 0; i < rowLength; i++) {
            versionData.push(rs.rows.item(i));
          }
          //alert(versionData)
          resolve(versionData);
        }), ((tx, error) => {
          this.log.log(this.fileName, 'getCategories', 'Error : ' + JSON.stringify(error));
          reject(error);
        }));
      });
    });
  }
  getCategoriesById(data?) {
    let versionData;
    return new Promise((resolve, reject) => {
      let query = '';
      query = "Select * from categories where id = " + data;
      this.getDB().transaction((tx) => {
        tx.executeSql(query, [], ((tx, rs) => {
          let rowLength = rs.rows.length;
          // //alert(rowLength)
          if (rowLength > 0) versionData = rs.rows.item(0)
          resolve(versionData);
        }), ((tx, error) => {
          this.log.log(this.fileName, 'getCategoriesById', 'Error : ' + JSON.stringify(error));
          reject(error);
        }));
      });
    });
  }
  getpasswordById(data?) {
    let versionData;
    return new Promise((resolve, reject) => {
      let query = '';
      query = "Select password.id as pid, c.id as cid, password.name as pname, c.name as cname, password.*  from password INNER JOIN categories c ON c.id = password.cat_id where pid = " + data;;
      // query = "Select * from password where id = " + data;
      this.getDB().transaction((tx) => {
        tx.executeSql(query, [], ((tx, rs) => {
          let rowLength = rs.rows.length;
          // //alert(rowLength)
          if (rowLength > 0) versionData = rs.rows.item(0)
          resolve(versionData);
        }), ((tx, error) => {
          this.log.log(this.fileName, 'getpasswordById', 'Error : ' + JSON.stringify(error));
          reject(error);
        }));
      });
    });
  }

  getPasswordList(data?) {
    //alert("227--------------" + data)
    let versionData = [];
    return new Promise((resolve, reject) => {
      let query = '';
      if (data != '') {
        localStorage.removeItem("tapToOpen")
        query = "Select password.id as pid, c.id as cid, password.name as pname, c.name as cname, password.*  from password INNER JOIN categories c ON c.id = password.cat_id where c.id = " + data;

      } else {

        query = "Select password.id as pid, c.id as cid, password.name as pname, c.name as cname, password.*  from password INNER JOIN categories c ON c.id = password.cat_id";
      }
      //alert(query)
      // query = "Select *  from password";
      this.getDB().transaction((tx) => {
        tx.executeSql(query, [], ((tx, rs) => {
          let rowLength = rs.rows.length;
          for (let i = 0; i < rowLength; i++) {
            versionData.push(rs.rows.item(i));
          }
          //alert(versionData)
          resolve(versionData);
        }), ((tx, error) => {
          this.log.log(this.fileName, 'getPasswordList', 'Error : ' + JSON.stringify(error));
          reject(error);
        }));
      });
    });
  }

  setDate() {
    //  //alert(date);
    return moment(new Date()).format("DD-MM-YYYY hh:mm A");
  }

  updateUserLog(user?) {
    let versionData = [];
    return new Promise((resolve, reject) => {
      let query = '';
      let insertValues = [];
      query = "UPDATE user SET login_time = ? , updated_date = ? where id = ?";
      insertValues.push(this.setDate());
      insertValues.push(this.setDate());
      insertValues.push(user.id);
      // insertValues.push(user.email);
      this.getDB().transaction((tx) => {
        tx.executeSql(query, insertValues, ((tx, rs) => {

          resolve(rs);
        }), ((tx, error) => {
          this.log.log(this.fileName, 'updateUserLog', 'Error : ' + JSON.stringify(error));
          reject(error);
        }));
      });
    });
  }
  updatePassword(user?) {
    let versionData = [];
    return new Promise((resolve, reject) => {
      let query = '';
      let insertValues = [];
      query = "UPDATE user SET login_time = ? , updated_date = ? , master_password = ? where id = ?";
      insertValues.push(this.setDate());
      insertValues.push(this.setDate());
      insertValues.push(user.password);
      insertValues.push(user.id);
      this.getDB().transaction((tx) => {
        tx.executeSql(query, insertValues, ((tx, rs) => {
          resolve(rs);
        }), ((tx, error) => {
          this.log.log(this.fileName, 'updatePassword', 'Error : ' + JSON.stringify(error));
          reject(error);
        }));
      });
    });
  }

  deleteCategoryFromTable(id?) {
    //alert("deleteCategoryFromTable");
    let versionData = [];
    return new Promise((resolve, reject) => {
      let query = '';
      query = "DELETE from categories where id = " + id;
      this.getDB().transaction((tx) => {
        tx.executeSql(query, [], ((tx, rs) => {
          //alert(rs);
          resolve(rs);
        }), ((tx, error) => {
          this.log.log(this.fileName, 'deleteCategoryFromTable', 'Error : ' + JSON.stringify(error));
          reject(error);
        }));
      });
    });
  }
  deleteListFromTable(id?) {
    //alert("deleteCategoryFromTable");
    let versionData = [];
    return new Promise((resolve, reject) => {
      let query = '';
      query = "DELETE from password where id = " + id;
      this.getDB().transaction((tx) => {
        tx.executeSql(query, [], ((tx, rs) => {
          //alert(rs);
          resolve(rs);
        }), ((tx, error) => {
          this.log.log(this.fileName, 'deleteListFromTable', 'Error : ' + JSON.stringify(error));
          reject(error);
        }));
      });
    });
  }

  addcategory(data?) {
    let versionData = [];
    return new Promise((resolve, reject) => {
      let query = '';
      let insertValues = [];
      query = "INSERT INTO categories(name, desc, created_date, updated_date, added_by) VALUES (?,?,?,?,?)";
      insertValues.push(data.catName);
      insertValues.push(data.catdesc);
      insertValues.push(this.setDate());
      insertValues.push(this.setDate());
      insertValues.push(data.user_id);
      this.getDB().transaction((tx) => {
        tx.executeSql(query, insertValues, ((tx, rs) => {
          //alert("139", rs.rowsAffected);
          resolve(rs);
        }), ((tx, error) => {
          this.log.log(this.fileName, 'registerUser', 'Error : ' + JSON.stringify(error));
          reject(error);
        }));
      });
    });
  }

  addpassword(data?) {
    let versionData = [];
    return new Promise((resolve, reject) => {
      let query = '';
      let insertValues = [];
      query = "INSERT INTO password(password, created_date, updated_date, added_by, hint, cat_id, url, expired, status, name, desc, user_name) VALUES (?,?,?,?,?,?,?,?,?,?,?,?)";
      insertValues.push(data.account_password);
      insertValues.push(this.setDate());
      insertValues.push(this.setDate());
      insertValues.push(data.user_id);
      insertValues.push(data.account_hint);
      insertValues.push(data.account_cat);
      insertValues.push(data.account_url);
      insertValues.push(data.account_expiry);
      insertValues.push('active');
      insertValues.push(data.account_name);
      insertValues.push(data.account_desc);
      insertValues.push(data.account_username);
      //alert(insertValues)
      this.getDB().transaction((tx) => {
        tx.executeSql(query, insertValues, ((tx, rs) => {
          //alert("139", rs.rowsAffected);
          resolve(rs.rowsAffected);
        }), ((tx, error) => {
          this.log.log(this.fileName, 'addpassword', 'Error : ' + JSON.stringify(error));
          reject(error);
        }));
      });
    });
  }
  UpdatePassword(data?) {
    let versionData = [];
    return new Promise((resolve, reject) => {
      let query = '';
      let insertValues = [];
      query = "UPDATE password SET password = ? , updated_date = ? , added_by = ?, hint = ?, cat_id = ?, url = ?, expired = ?, status = ?, name = ?, desc = ?, user_name = ? where id = ?";
      insertValues.push(data.account_password);
      insertValues.push(this.setDate());
      insertValues.push(data.user_id);
      insertValues.push(data.account_hint);
      insertValues.push(data.account_cat);
      insertValues.push(data.account_url);
      insertValues.push(data.account_expiry);
      insertValues.push('active');
      insertValues.push(data.account_name);
      insertValues.push(data.account_desc);
      insertValues.push(data.account_username);
      insertValues.push(data.pwd_id);
      //alert(insertValues)
      this.getDB().transaction((tx) => {
        tx.executeSql(query, insertValues, ((tx, rs) => {
          //alert("139", rs.rowsAffected);
          resolve(rs.rowsAffected);
        }), ((tx, error) => {
          this.log.log(this.fileName, 'addpassword', 'Error : ' + JSON.stringify(error));
          reject(error);
        }));
      });
    });
  }


  UpdateCategory(data?) {
    let versionData = [];
    return new Promise((resolve, reject) => {
      let query = '';
      let insertValues = [];
      query = "UPDATE categories SET name = ? , desc = ?, updated_date = ? , added_by = ? where id = ?";
      insertValues.push(data.catName);
      insertValues.push(data.catdesc);
      insertValues.push(this.setDate());
      insertValues.push(data.user_id);
      insertValues.push(data.cat_edit_id);
      this.getDB().transaction((tx) => {
        tx.executeSql(query, insertValues, ((tx, rs) => {
          resolve(rs.rowsAffected);
        }), ((tx, error) => {
          this.log.log(this.fileName, 'UpdateCategory', 'Error : ' + JSON.stringify(error));
          reject(error);
        }));
      });
    });
  }

  UpdateLastViewPassword(data?) {
    // alert(data)
    let versionData = [];
    return new Promise((resolve, reject) => {
      let query = '';
      let insertValues = [];
      query = "UPDATE password SET last_view = ? where id = ?";
      insertValues.push(this.setDate());
      insertValues.push(data);
      // alert(insertValues)
      this.getDB().transaction((tx) => {
        tx.executeSql(query, insertValues, ((tx, rs) => {
          resolve(rs.rowsAffected);
        }), ((tx, error) => {
          this.log.log(this.fileName, 'UpdateLastViewPassword', 'Error : ' + JSON.stringify(error));
          reject(error);
        }));
      });
    });
  }

  checkCategory(password) {
    //  alert(password)
    let versionData = [];
    return new Promise((resolve, reject) => {
      let query = '';
      query = "Select * from categories where name = '" + password.catName + "'";
      // alert(query)
      this.getDB().transaction((tx) => {
        tx.executeSql(query, [], ((tx, rs) => {
          if (rs.rows.length != 0) {
            versionData = rs.rows.item(0)
          }
          resolve(versionData);
        }), ((tx, error) => {
          this.log.log(this.fileName, 'checkCategory', 'Error : ' + JSON.stringify(error));
          reject(error);
        }));
      });
    });
  }

  deleteAllDataFromCat(data) {
    //alert("rs");
    let versionData = [];
    return new Promise((resolve, reject) => {
      let query = '';
      query = "DELETE from password where cat_id = " + data;
      this.getDB().transaction((tx) => {
        tx.executeSql(query, [], ((tx, rs) => {
          //alert(rs);
          resolve(rs);
        }), ((tx, error) => {
          this.log.log(this.fileName, 'deleteAllDataFromCat', 'Error : ' + JSON.stringify(error));
          reject(error);
        }));
      });
    });
  }

  getNotes(data?) {

    let versionData = [];
    return new Promise((resolve, reject) => {
      let query = '';
      query = "Select * From notes";
      this.getDB().transaction((tx) => {
        tx.executeSql(query, [], ((tx, rs) => {
          let rowLength = rs.rows.length;
          for (let i = 0; i < rowLength; i++) {
            versionData.push(rs.rows.item(i));
          }
          //alert(versionData) 
          resolve(versionData);
        }), ((tx, error) => {
          this.log.log(this.fileName, 'getNotes', 'Error : ' + JSON.stringify(error));
          reject(error);
        }));
      });
    });
  }

  getNotesById(data?) {

    let versionData = [];
    return new Promise((resolve, reject) => {
      let query = '';
      query = "Select * From notes where id = " + data;
      this.getDB().transaction((tx) => {
        tx.executeSql(query, [], ((tx, rs) => {
          let rowLength = rs.rows.length;
          if (rowLength > 0) versionData = rs.rows.item(0)
          resolve(versionData);
        }), ((tx, error) => {
          this.log.log(this.fileName, 'getNotesById', 'Error : ' + JSON.stringify(error));
          reject(error);
        }));
      });
    });
  }
  saveMyNotes(user?) {
    let versionData = [];
    return new Promise((resolve, reject) => {
      let query = '';
      let insertValues = [];
      query = "INSERT INTO notes(notes_content, created_date, updated_date, status, added_by, notes_title) VALUES (?,?,?,?,?,?)";
      insertValues.push(user.content);
      insertValues.push(this.setDate());
      insertValues.push(this.setDate());
      insertValues.push('active');
      insertValues.push(user.user_id);
      insertValues.push(user.title);
      this.getDB().transaction((tx) => {
        tx.executeSql(query, insertValues, ((tx, rs) => {
          //alert("139", rs.rowsAffected);
          resolve(rs);
        }), ((tx, error) => {
          this.log.log(this.fileName, 'saveMyNotes', 'Error : ' + JSON.stringify(error));
          reject(error);
        }));
      });
    });
  }

  updateMyNotes(data) {
    let versionData = [];
    return new Promise((resolve, reject) => {
      let query = '';
      let insertValues = [];
      query = "UPDATE notes SET notes_content = ? , notes_title = ?, updated_date = ? where id = ?";
      insertValues.push(data.content);
      insertValues.push(data.title);
      insertValues.push(this.setDate());
      insertValues.push(data.last_id);
      this.getDB().transaction((tx) => {
        tx.executeSql(query, insertValues, ((tx, rs) => {
          resolve(rs);
        }), ((tx, error) => {
          this.log.log(this.fileName, 'updateMyNotes', 'Error : ' + JSON.stringify(error));
          reject(error);
        }));
      });
    });
  }

  deleteNotes(data?) {
    console.log(data)
    let versionData = [];
    return new Promise((resolve, reject) => {
      let query = '';
      query = "Delete  from notes where id = " + data;
      this.getDB().transaction((tx) => {
        tx.executeSql(query, [], ((tx, rs) => {
          resolve(rs);
        }), ((tx, error) => {
          this.log.log(this.fileName, 'deleteNotes', 'Error : ' + JSON.stringify(error));
          reject(error);
        }));
      });
    });
  }

}