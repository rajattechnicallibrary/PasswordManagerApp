import { Injectable } from '@angular/core';
import { File } from "@ionic-native/file/ngx";
import * as moment from "moment";
import { Platform, LoadingController } from '@ionic/angular';

declare var cordova: any;

@Injectable({
  providedIn: 'root'
})
export class LoggerService {
  fileName = "loggerProvider"
  hasCordova: any = false;
  prefix = "log_";
  suffix = ".log";
  constructor(
    private file: File,
    private platform: Platform,
    public loadingController: LoadingController

  ) {
    if (this.platform.is('cordova')) {
      this.hasCordova = true;
    }
  }

  log(className, methodName, message) {
    console.log(className,methodName,message)
    let msg = moment().format("MM-DD-YYYY hh:mm:ss.SSSZ a") + ': ' + className.toUpperCase() + ' : ' + methodName + ' - ' + message + "\n";
    var currentDate = this.prefix + moment(new Date()).format("MM-DD-YYYY") + this.suffix;
    if (this.hasCordova) {
      this.file.createDir(this.file.externalRootDirectory, "passwordManager", true)
        .then((err) => {
          this.file.writeFile(this.file.externalRootDirectory + "/passwordManager", currentDate, msg, { replace: false, append: true })
            .catch((error) => {
              this.file.writeFile(this.file.externalRootDirectory + "/passwordManager", currentDate, msg, { replace: false })
                .catch(error => console.log("writeExistingFile Error log not updated"));
            });
        })
        .catch((err) => {
          setTimeout(() => { this.log(className, methodName, message); }, 100);
        });
    } else {
      console.log(msg);
    }
  }

  async loader(msg?) {
    const loading = await this.loadingController.create({
      spinner: "lines",
      duration:1500,
      message: msg?"Hi":"Please Wait...",
      translucent: true,
    });
    return await loading.present();
  }

  checkFileIfExist(filepath, filename) {
    return new Promise((resolve, reject) => {
      this.file.checkFile(filepath, filename).then(res => {
        resolve(res);
      }).catch((err: any) => {
        if (err.message != 'NOT_FOUND_ERR') this.log(this.fileName, "checkFileIfExist", "Error in checkFile : " + JSON.stringify(err));
        resolve(false);
      })
    });
  }

  checkDirIfExist(filepath, filename) {
    return new Promise((resolve, reject) => {
      this.file.checkDir(filepath, filename).then(res => {
        resolve(res);
      }).catch((err: any) => {
        if (err.message != 'NOT_FOUND_ERR') this.log(this.fileName, "checkDirIfExist", "Check DIR : " + JSON.stringify(err));
        resolve(false);
      })
    });
  }

  
  /**
  * 08/07/2018 Zohaib Khan: Checking if directory exists or not
  */
 checkIfDirectoryExist(path, dirName) {
  return new Promise((resolve, reject) => {
    this.file.checkDir(path, dirName).then(res => {
      resolve(res)
    }).catch((err: any) => {
      if (err.message != 'NOT_FOUND_ERR') this.log(this.fileName, "checkIfDirectoryExist", "Error in checkDir : " + JSON.stringify(err));
      resolve(false);
    });
  })
}
}
