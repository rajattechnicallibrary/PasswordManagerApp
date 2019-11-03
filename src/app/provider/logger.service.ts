import { Injectable } from '@angular/core';
import { File } from "@ionic-native/file/ngx";
import * as moment from "moment";
import { Platform } from '@ionic/angular';

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
    private platform: Platform

  ) {
    if (this.platform.is('cordova')) {
      this.hasCordova = true;
    }
  }

  log(className, methodName, message) {
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
}
