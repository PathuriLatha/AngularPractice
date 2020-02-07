
import { Component, Inject } from '@angular/core';
import { CalculationsService } from './calculations.service';
import { LoginService } from './login.service';
import { PopcornService } from './popcorn.service';
import { Color } from './color.enum';
import { WeekDay } from './week-day.enum';

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

  city: string = "Hyderabad";
  salary: number = 752487500;
  no: number = 0.72;
  titleCase: string = "This is a title case example";
  person: object = { firstName: "Latha", lastName: "Pathuri" };
  dt: Date = new Date();

  videoDuration: number = 150;

  weekDays = WeekDay;

/*constructor(calc: CalculationsService, @Inject(LoginService)private s: LoginService){
    this.sum = calc.add(1, 3, 5, 7, 9);
  } */

  enumName: string = 'Enum Colors';
  colors = Color;
  selectedColor: Color;

  constructor(calc: CalculationsService, @Inject(LoginService)private s: LoginService, private popcorn: PopcornService){
    this.sum = calc.add(1, 3, 5, 7, 9);
  }

/* constructor(@Inject(LoginService)private s : LoginService){

  }
 */
   public onColorClick(color: Color): void {
      /* console.log(this.selectedColor);
      console.log(color); */
     this.selectedColor = color;
   }

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

