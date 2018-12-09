import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.less']
})
export class ContactComponent implements OnInit {

  constructor(private data: DataService) { }
  message: string = ''
  infoList: any = []
  ngOnInit() {
    this.data.currentMessage.subscribe(message => this.message = message)
    this.data.infoList.subscribe(list => this.infoList = [...this.infoList, ...list])
  }
ß
}
