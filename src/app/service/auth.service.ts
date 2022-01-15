import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Role } from '@app/model/Role';
import { User } from '@app/model/User';
import { environment } from '@environments/environment';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject: BehaviorSubject<User | null>;
  public currentUser: Observable<User | null>; // ไว้ให้ คลาสอื่นเรียกใช้ แบบ subscribe

  private currentRoleSubject: BehaviorSubject<string[] | null>;
  public currentRole: Observable<string[] | null>; //  ไว้ให้ คลาสอื่นเรียกใช้ แบบ subscribe

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

    this.currentRoleSubject = new BehaviorSubject<string[] | null>(null);
    this.currentRole = this.currentRoleSubject.asObservable();
  }

  // getter เรียกใช้โดย เรียก userService.currentUserValue ไม่ต้องใส่ ()
  public get currentUserValue(): User | null {
    return this.currentUserSubject.value;
  }

  public get currentRoleValue(): string[] | null {
    return this.currentRoleSubject.value;
  }

  async getUser(): Promise<void> {
    const user = await this.http.get<User>(`${environment.apiUrl}/api/auth/user`, {
      withCredentials: true
    }).toPromise()
    localStorage.setItem('currentUser', JSON.stringify(user));
    console.log([user?.roles])
    this.currentUserSubject.next(user || null);
  }

  async login(credential: Credential): Promise<any> {
    const result = await this.http.post<any>(`${environment.apiUrl}/api/auth/login`, credential, {
      withCredentials: true
    }).toPromise()
    return result;
  }


  async register(body: any): Promise<any> {
    const result = await this.http.post<any>(`${environment.apiUrl}/api/auth/register`, body, {
      withCredentials: true
    }).toPromise()
    return result;
  }

  logout(): void {
    this.currentUserSubject.next(null);
    localStorage.removeItem('currentUser')
    this.http.post(`${environment.apiUrl}/api/auth/logout`, {}, { withCredentials: true }).toPromise()
  }

  isAuthorized(): boolean {
    return !!this.currentUserValue;
  }

  hasRole(role: Role): boolean {
    return this.isAuthorized() && (this.currentUserValue?.roles?.indexOf(role) !== -1);
  }
}
