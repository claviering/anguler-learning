import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }
  private messageSource = new BehaviorSubject<string>('default message')
  private infoListSoure = new BehaviorSubject<any>([])
  currentMessage = this.messageSource.asObservable()
  infoList = this.infoListSoure.asObservable()
  changeMessage (message: string) {
    this.messageSource.next(message)
  }
  changeInfoList (list: any) {
    this.infoListSoure.next(list)
  }
  firstClick () {
    console.log('firstClick');
  }
  getUsers () {
    // return this.http.get('http://www.example.com')
    console.log('getUsers');
  }
}
