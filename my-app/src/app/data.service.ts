import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }
  private messageSource = new BehaviorSubject<string>('List of contact')
  private infoListSoure = new BehaviorSubject<Object[]>([])
  currentMessage = this.messageSource.asObservable()
  infoList = this.infoListSoure.asObservable()
  changeMessage (message: string) {
    this.messageSource.next(message)
  }
  changeInfoList (list: Object[]) {
    let tmpList: Object[] = this.infoListSoure.getValue()
    tmpList = [...tmpList, ...list]
    this.infoListSoure.next(tmpList)
  }
  firstClick () {
    console.log('firstClick');
  }
  getUsers () {
    // return this.http.get('http://www.example.com')
    console.log('getUsers');
  }
}
