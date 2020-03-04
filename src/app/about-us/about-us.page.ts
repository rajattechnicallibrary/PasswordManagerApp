import { Component, OnInit } from '@angular/core';
import { BridgeService } from '../provider/bridge.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.page.html',
  styleUrls: ['./about-us.page.scss'],
})
export class AboutUsPage implements OnInit {

  constructor(
    public bridge: BridgeService,

  ) { }

  ngOnInit() {
  }

}
