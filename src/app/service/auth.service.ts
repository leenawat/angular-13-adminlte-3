import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../model/User';
import { HttpClient } from '@angular/common/http';
import { Role } from '../model/Role';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject: BehaviorSubject<User | null>;
  public currentUser: Observable<User | null>;

  constructor(private http: HttpClient) {
    const localUser = localStorage.getItem('currentUser');
    let localUserParsed = null;
    if (localUser) {
      try {
        localUserParsed = JSON.parse(localUser);
      } catch (err) {
        localUserParsed = null;
      }
    }
    this.currentUserSubject = new BehaviorSubject<User | null>(localUserParsed)
    this.currentUser = this.currentUserSubject.asObservable();
  }

  // getter เรียกใช้โดย เรียก userService.currentUserValue ไม่ต้องใส่ ()
  public get currentUserValue(): User | null {
    return this.currentUserSubject.value;
  }

  async getUser(): Promise<void> {
    const user = await this.http.get<User>(`${environment.apiUrl}/api/user`, {
      withCredentials: true
    }).toPromise()
    localStorage.setItem('currentUser', JSON.stringify(user));
    console.log([user?.roles])
    this.currentUserSubject.next(user || null);
  }

  async login(credential: Credential): Promise<any> {
    const result = await this.http.post<any>(`${environment.apiUrl}/api/login`, credential, {
      withCredentials: true
    }).toPromise()
    return result;
  }

  logout(): void {
    this.currentUserSubject.next(null);
    localStorage.removeItem('currentUser')
    this.http.post(`${environment.apiUrl}/api/logout`, {}, { withCredentials: true }).toPromise()
  }

  isAuthorized(): boolean {
    return !!this.currentUserValue;
  }

  hasRole(role: Role): boolean {
    return this.isAuthorized() && (this.currentUserValue?.roles?.indexOf(role) !== -1);
  }
}
