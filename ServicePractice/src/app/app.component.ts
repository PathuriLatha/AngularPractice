
import { Component, Inject } from '@angular/core';
import { CalculationsService } from './calculations.service';
import { LoginService } from './login.service';
import { PopcornService } from './popcorn.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ServicePractice';
  sum: number = 0;

  userName: string = "";
  password: string = "";
  loginMessage: string = "";
  popcornMsg: string = "";

/*   constructor(calc: CalculationsService, @Inject(LoginService)private s: LoginService){
    this.sum = calc.add(1, 3, 5, 7, 9);
  } */

  constructor(calc: CalculationsService, @Inject(LoginService)private s: LoginService, private popcorn: PopcornService){
    this.sum = calc.add(1, 3, 5, 7, 9);
  }

/* constructor(@Inject(LoginService)private s : LoginService){

  }
 */

  cookIt(qty){
    this.popcornMsg = this.popcorn.cookPopcorn(qty);
  }

  checkLogin(){
    if(this.s.checkUsernameAndPassword(this.userName, this.password)==true){
      this.loginMessage = "Successful Login";
    }
    else{
      this.loginMessage = "Login Fail";
    }
  }
}

