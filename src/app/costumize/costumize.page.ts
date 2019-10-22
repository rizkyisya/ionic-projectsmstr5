

import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'costumize.page.html',
  styleUrls: ['costumize.page.scss']
  
})
export class CostumizePage {
  //public rice: string;
  //public warteg: string;
  public _dataK: any={};
  constructor() {}

  
  pesan()
  {
    console.log(this._dataK);
  }
}


