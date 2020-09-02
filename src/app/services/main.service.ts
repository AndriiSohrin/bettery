import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Model} from '../models/model';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(private http: HttpClient) {

  }

  getPost(): Observable<Model> {
    return this.http.post<any>('http://13.229.200.135/privateEvents/get_by_id', {id: 457396837154817}, {responseType: 'json'});
  }
}
