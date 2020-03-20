import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { concat, forkJoin, merge} from 'rxjs';

@Injectable()
export class UsersService {

  baseUrl= "https://reqres.in/api/";

  constructor(
    private http: HttpClient
  ) { }

  getUsers(){
    return forkJoin([
      this.http.get(this.baseUrl + 'users?page=1'),
      this.http.get(this.baseUrl + 'users?page=2')    
    ]);
  }

  getSingleUser(userId:string){
    return this.http.get(this.baseUrl + 'users/' + userId)
  }

}