import {FormControl} from "@angular/forms";

export interface ILogFormModel{
  login: FormControl<string | null>,
  password: FormControl<string | null>
  repeatPassword: FormControl<string | null>,
}

export interface ILogFormValue{
  login:string,
  password: string,
  repeatPassword?: string
}
