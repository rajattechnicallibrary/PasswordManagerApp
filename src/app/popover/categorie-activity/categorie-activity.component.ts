import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-categorie-activity',
  templateUrl: './categorie-activity.component.html',
  styleUrls: ['./categorie-activity.component.scss'],
})
export class CategorieActivityComponent implements OnInit {

  constructor(private popoverCtrl: PopoverController) { }

  ngOnInit() {}
  async onDismiss() {
    try {
        await this.popoverCtrl.dismiss();
    } catch (e) {
        //click more than one time popover throws error, so ignore...
    }

}
}
