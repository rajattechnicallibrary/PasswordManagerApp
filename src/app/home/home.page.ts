import { Component } from '@angular/core';
import { DatabaseService } from '../provider/database.service';
import { LoggerService } from '../provider/logger.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  fileName: any = 'homepage';
  newarray = [
    { "name": "Credit Card", "color": this.getRandomColor() },
    { "name": "Credit Card", "color": this.getRandomColor() },
    { "name": "Credit Card", "color": this.getRandomColor() },
    { "name": "Credit Card", "color": this.getRandomColor() },
  ];
  constructor(
    public common: DatabaseService,
    private log: LoggerService
  ) { }

  viewDetail() {
    this.common.loadDevelopers();
    let randomData = this.stringGen(30) + this.getRandomColor();
    console.log(randomData)
    this.log.log(this.fileName, "initDB", randomData);
  }

  stringGen(len) {
    var text = "";

    var charset = "abcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < len; i++)
      text += charset.charAt(Math.floor(Math.random() * charset.length));

    return text;
  }

  getRandomColor() {
    // db114e
    var letters = 'db114e'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.round(Math.random() * 4)];
    }
    console.log(color);
    return color; 
  }

  ColorLuminance(hex='db114e', lum = -0.5) {

  // validate hex string
  hex = String(hex).replace(/[^0-9a-f]/gi, '');
  if (hex.length < 6) {
    hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
  }
  lum = lum || 0;

  // convert to decimal and change luminosity
  var rgb = "#", c, i;
  for (i = 0; i < 3; i++) {
    c = parseInt(hex.substr(i * 2, 2), 16);
    c = Math.round(Math.min(Math.max(0, c + (c * lum)), 255)).toString(16);
    rgb += ("00" + c).substr(c.length);
  }

  return rgb;
}

}
