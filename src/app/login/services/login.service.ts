import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {mockLogin, mockRegister} from "../../shared/utils/mocks";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private env = environment
  constructor(
    private http: HttpClient
  ) { }

  public login(cred: any){
    if(this.env.mockApi){
      return mockLogin(cred);
    } else{
      return this.http.post(`${this.env.apiUrl}/login`, cred)
    }
  }

  public register(cred: any){
    if(this.env.mockApi){
      return mockRegister(cred);
    } else{
      return this.http.post(`${this.env.apiUrl}/register`, cred)
    }
  }


}
