import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { DataService } from '../data.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.less']
})
export class ContactComponent implements OnInit {

  constructor(
    private data: DataService,
    private router: Router
    ) {}
  message: string = ''
  infoList: any = []
  ngOnInit() {
    this.data.currentMessage.subscribe(message => this.message = message)
    this.data.infoList.subscribe(list => this.infoList = [...this.infoList, ...list])
  }
  aboutme (e) {
    console.log('e target id', e.target.id);
    console.log('e target' , e.target);
    this.router.navigate(['/about'], {
      queryParams: {
        name: e.target.id
      }
    })
  }
}
