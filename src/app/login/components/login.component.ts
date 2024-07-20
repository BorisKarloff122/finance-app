import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ILogFormModel} from "../../shared/models/logForm.model";
import {Router} from "@angular/router";
import {LoginService} from "../services/login.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  public isRegistration = false;
  public showPasswordRepeat = false;
  public showPassword = false;
  public form:FormGroup<ILogFormModel> = this.fb.group({
    login: ['', [Validators.required]],
    password: ['',[Validators.required]],
    repeatPassword: ['', [Validators.required]],
  });

  public item = {
    top: '0',
    left: '0',
    size: "big",
    rotate: 0,
    opacity: 1,
    inversion: true,
    movement: 0.015
  }

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private loginService: LoginService
  ) { }

  ngOnInit(){
    this.disableRepeatPassword()
  }

  private disableRepeatPassword(){
    if(this.fc('repeatPassword').disabled){
      this.fc('repeatPassword').enable();
    } else{
      this.fc('repeatPassword').disable();
    }
  }

  public togglePassword(): void{
    this.showPassword = !this.showPassword
  }

  public togglePasswordRepeat(): void{
    this.showPasswordRepeat = !this.showPasswordRepeat;
  }

  public fc(name: string): AbstractControl{
    return <AbstractControl<any, any>>this.form.get(name);
  }

  public toggleLoginMode(): void{
    this.disableRepeatPassword();
    this.isRegistration = !this.isRegistration;
  }

  public submit(): void{

    if(this.form.valid){
      if(this.isRegistration){
        this.loginService.register(this.form.value).subscribe({
        next: (res)=>{
          this.isRegistration = !this.isRegistration;
        },
        error: (error)=>{
          console.log(error)
        }});
        return;
      }

      this.loginService.login(this.form.value).subscribe({
        next: (res)=>{
          if(res.status === 200){
            this.router.navigate(['main']);
          }
        },
        error: (error)=>{
          console.log(error)
        }
      });

      return
    }
  }


}
