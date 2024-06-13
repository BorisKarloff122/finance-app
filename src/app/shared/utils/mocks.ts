import {Observable, of, throwError} from "rxjs";

export class httpResponse{

  public data = [];
  public status = 200;
  public message = '';

  constructor(data: any,status: number, message: string){
    this.data = data;
    this.status = status;
    this.message = message
  }

}


export class project{
  public name = '';
  public id = 0;
  public tasks: number[] = [];
  public cols: string[] = [];

  constructor(name: string, id: number, cols: string[]) {
    this.name = name;
    this.id = id;
    this.tasks = [];
    this.cols = cols
  }

}

const allowedUsers: any = [
  {login: 'Tony', password: '1', role: 'admin'}
]


const projects: any = [
  {
    name: 'Project 1',
    id:1,
    tasks:[
     1,2,3,4
    ],
    cols:['To Do', 'In Progress', 'Done']
  },
  {
    name: 'Project 2',
    id:2,
    tasks:[
      1,2,3,4
    ],
    cols:['To Do', 'In Progress', 'Done']
  }
]

const tasks: any = [
  {
    id:1,
    title: 'Do math',
    col:'To Do',
    description:'Do some hardcore math',
    date:''
  },
  {
    id:2,
    title: 'Do math',
    col:'To Do',
    description:'Do some hardcore math',
    date:''
  },
  {
    id:3,
    title: 'Do math',
    col:'To Do',
    description:'Do some hardcore math',
    date:''
  },
  {
    id:4,
    title: 'Do math',
    col:'To Do',
    description:'Do some hardcore math',
    date:''
  },
]

const baseEntries = ['allowedUsers', 'projects', 'tasks']

const base: any = {
  allowedUsers,
  tasks,
  projects
}

const initBase = ()=>{
  baseEntries.forEach((i)=>{
      localStorage.setItem(i, JSON.stringify(base[i]));
  })
}

initBase()

export const mockLogin = (creds: {login: string, password: string}): Observable<any> =>{
      const searchedCred = allowedUsers.findIndex((el: any)=>
        el.login === creds.login && el.password === creds.password)

      if(searchedCred !== -1){
        localStorage.setItem('activeUser', JSON.stringify(allowedUsers[searchedCred]))
        return of(new httpResponse([], 200, 'Login successful'))
      } else {
        return throwError(() => new httpResponse([], 403, 'No user with such credentials'))
      }
}

export const mockRegister = (creds: any) => {
    if(creds.login.length > 0 && creds.password > 0 && creds.repeatPassword === creds.password){
      delete creds.repeatPassword;
      allowedUsers.push({...creds, img:'', role: 'user'});
      initBase();
      return of(new httpResponse([], 200, 'User successfully registered'))
    } else {
      return throwError(() => {return new httpResponse([], 400, 'Invalid credentials for register')})
    }
}


export const mockProjectsList = () => {
  let result = JSON.parse(localStorage.getItem('projects') || '[]')

  if(result.length){
    result = result.map((x: any)=> x.name)
  }
  console.log(result)
  return of(new httpResponse(result, 200, ''));
}

export const logOut = (): Observable<any> => {
  localStorage.removeItem('activeUser');
  return of(new httpResponse([], 200, 'Successfully logged out'))
}

export const getActiveUser = (): Observable<any> => {
 return of(new httpResponse(JSON.parse(localStorage.getItem('activeUser')!), 200, ''));
}

export const getProject = (prjctName: string): Observable<any> =>{
  let result = JSON.parse(localStorage.getItem('projects')!);

  return of(new httpResponse(result.filter((el: any)=> el.name === prjctName), 200, ''))
}
