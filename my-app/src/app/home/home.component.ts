import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {

  constructor(private data: DataService) { }
  h1Style: Boolean = false
  users: Array<Object> = [{
    name: '1',
    age: 11
  },{
    name: '2',
    age: 22
  }]
  ngOnInit() {
    // this.data.getUsers().subscribe(data => {
    //   console.log('data', data);
    // })
  }
  firstClick () {
    console.log('click me')
    this.h1Style = !this.h1Style
    this.data.firstClick()
  }
}
