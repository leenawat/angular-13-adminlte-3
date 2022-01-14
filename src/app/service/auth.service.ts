import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../model/User';
import { HttpClient } from '@angular/common/http';
import { Role } from '../model/Role';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject: BehaviorSubject<User | null>;
  public currentUser: Observable<User | null>;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User | null>(JSON.parse(localStorage.getItem('currentUser') || ''));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  // getter เรียกใช้โดย เรียก userService.currentUserValue ไม่ต้องใส่ ()
  public get currentUserValue(): User | null {
    return this.currentUserSubject.value;
  }

  async getUser() {
    const user = await this.http.get<User>('http://localhost:8000/api/user', {
      withCredentials: true
    }).toPromise()
    localStorage.setItem('currentUser', JSON.stringify(user));
    console.log([user?.roles])
    this.currentUserSubject.next(user || null);
  }

  async login(credential: Credential) {
    const result = await this.http.post<any>('http://localhost:8000/api/login', credential, {
      withCredentials: true
    }).toPromise()
    return result;
  }

  logout() {
    this.currentUserSubject.next(null);
    localStorage.removeItem('currentUser')
    this.http.post('http://localhost:8000/api/logout', {}, { withCredentials: true }).toPromise()
  }

  isAuthorized() {
    return !!this.currentUserValue;
  }

  hasRole(role: Role) {
    return this.isAuthorized() && (this.currentUserValue?.roles?.indexOf(role) !== -1);
  }
}
