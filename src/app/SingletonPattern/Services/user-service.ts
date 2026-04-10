import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
    private username: string = "Guest";
 
  setUser(name:string): void
  {
    this.username=name;
  }
  getUser()
  {
    return this.username;
  }
 
}
