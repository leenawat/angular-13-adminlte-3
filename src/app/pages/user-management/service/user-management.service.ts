import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserManagementService {
  public resourceUrl = '/api/user';

  constructor(private http: HttpClient) { }

  query(): Observable<any> {
    return this.http.get(this.resourceUrl);
  }

  
  find(id: any): Observable<any> {
    return this.http.get(`${this.resourceUrl}/${id}`);
  }

}
