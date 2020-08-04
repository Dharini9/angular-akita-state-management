import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private apiService: ApiService
  ) { }

  commonGetApiCall(url, param = null, externalUrl = null) {
    if (param) {
      return this.apiService.get(url, param);
    } else {
      return this.apiService.get(url);
    }
  }

  commonPostApiCall(url, param, externalUrl = null, isFormdata = false) {
    return this.apiService.post(url, param, externalUrl, isFormdata);
  }
}
