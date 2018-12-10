import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.less']
})
export class AboutComponent implements OnInit {

  private name: any = ''
  constructor(private router: ActivatedRoute) { }

  ngOnInit() {
    this.router.queryParams.subscribe(params => {
      console.log('router params name', params.name);
      this.name = params.name
      console.log('this.name', this.name);
    })
  }

}
