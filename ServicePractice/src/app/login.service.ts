
import { Injectable } from '@angular/core';
import { User } from './user';


/* @Injectable({
  providedIn: 'root'
}) */

@Injectable()
export class LoginService {
  users: User[] = [
    new User("Rama", "Rama@123"),
    new User("Latha", "Latha@123"),
    new User("Lasya", "Lasya@123"),
  ];

  constructor() { }

  checkUsernameAndPassword(usn: string, pwd: string): boolean{
    let count = 0;
    console.log("userName :: "+usn+" password :: "+pwd);
    //console.log(this.users[2].userName+" "+this.users[2].password);
    for(let i=0; i<this.users.length; i++){
      if(this.users[i].userName==usn && this.users[i].password==pwd){
        count++;
      }
     console.log(this.users[i].userName+ " , " +this.users[i].password);
    }
    if(count == 1){
      return true;
    }
    else{
      return false;
    }
  }
}


