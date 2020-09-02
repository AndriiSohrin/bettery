import { Injectable } from '@angular/core';
import {Model} from '../../models/model';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {MainService} from '../main.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainResolveService implements Resolve<Model>{

  constructor(private mainService: MainService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Model> | Promise<Model> | Model {
    return this.mainService.getPost();
  }
}
