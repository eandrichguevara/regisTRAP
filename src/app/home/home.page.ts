import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  username = ""

  constructor(private _route: ActivatedRoute) {
    this.username = this._route.snapshot.paramMap.get('username');
  }



}
