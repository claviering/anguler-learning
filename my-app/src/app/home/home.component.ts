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
  person: any = {
    name: '',
    email: '',
    gender: '',
    hobby: ''
  }
  personList: any[] = []
  ngOnInit() {
    // this.data.getUsers().subscribe(data => {
    //   console.log('data', data);
    // })
  }
  newMessage () {
    this.data.changeMessage('new message')
  }
  showPerson () {
    this.personList.push(this.person)
    console.log('personList', this.personList);
    this.person = {}
    this.data.changeInfoList(this.personList)
  }
  firstClick () {
    console.log('click me')
    this.h1Style = !this.h1Style
    this.data.firstClick()
  }
}
