import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }

  public toastMessages: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  public componentRef: any;
}
