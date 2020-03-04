import { Component, OnInit } from '@angular/core';
import { BridgeService } from '../provider/bridge.service';

@Component({
  selector: 'app-legal-terms',
  templateUrl: './legal-terms.page.html',
  styleUrls: ['./legal-terms.page.scss'],
})
export class LegalTermsPage implements OnInit {

  constructor(
    public bridge: BridgeService,

  ) { }

  ngOnInit() {
  }

}
