import { Component, OnInit } from '@angular/core';
import {MainDataService} from "./services/main-data.service";
import {Router} from "@angular/router";
import {lastValueFrom} from "rxjs";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  public activeUser$ = this.mainDataService.getActiveUser();
  public projectsList$ = this.mainDataService.getProjectsList();
  public selectedProjectName = '';
  public selectedProject$ = this.mainDataService.getProject(this.selectedProjectName)
  public showUserInfo = false;

  constructor(
    private mainDataService: MainDataService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  public editUser(){

  }

  public async logOut(){
    this.router.navigate(['/'])
    await lastValueFrom(this.mainDataService.logOut())
  }

  public addProject(){

  }

  public toggleUserInfo(){
    this.showUserInfo = ! this.showUserInfo
  }

}
