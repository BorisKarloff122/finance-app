import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {getActiveUser, getProject, logOut, mockProjectsList} from "../../shared/utils/mocks";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MainDataService {
  private env = environment

  constructor(
    private http: HttpClient
  ) { }

  public getActiveUser(){
    if(this.env.mockApi) {
      return getActiveUser();
    }
      return this.http.get(`${this.env.apiUrl}/activeUser`);

  }

  public logOut(){
    if(this.env.mockApi){
      return logOut();
    }
    return this.http.get(`${this.env.apiUrl}/logOut`)
  }

  public getProjectsList(): Observable<any>{
    if(this.env.mockApi){
      return mockProjectsList();
    }
     return this.http.get(`${this.env.apiUrl}/projects/list`)
  }

  public getProject(prjctName: string): Observable<any>{
    if(this.env.mockApi){
      return getProject(prjctName);
    }
    return this.http.get(`${this.env.apiUrl}/projects/${prjctName}`)
  }

}
