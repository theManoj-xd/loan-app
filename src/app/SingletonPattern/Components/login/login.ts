import { Component } from '@angular/core';
import { UserService } from '../../Services/user-service';


@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  constructor(private userService: UserService) {}
 
  
  login(){
    this.userService.setUser("Tom")
  }
}
