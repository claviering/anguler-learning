import { Component, OnInit } from '@angular/core';
import {MatButtonModule, MatFormFieldModule} from '@angular/material';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.less']
})
export class NavComponent implements OnInit {
  imports: [MatButtonModule, MatFormFieldModule]
  appTitle: string = 'app titile'
  constructor() { }

  ngOnInit() {
  }
}
