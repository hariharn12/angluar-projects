import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor() { }

  alertbtn(type:number){
alert('client '+type+' sucessufully')
  }

}
