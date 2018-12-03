import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }
  firstClick () {
    console.log('firstClick');
  }
  getUsers () {
    // return this.http.get('http://www.example.com')
    console.log('getUsers');
  }
}
