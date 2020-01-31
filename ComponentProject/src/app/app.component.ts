import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  /* template: ``, */
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Data Binding';
  test: string = "";
  inputText: string = "";
  changeCount : number = 0;
  changeText: string = "";
  keyupCount : number = 0;
  keyupText : string = "";
  keyupTextValue : string = "";


  username: string = "";
  password: string = "";
  successMsg: string = "";
  errorMsg: string = "";
  CheckLogin( ){
    if (this.password == "password")
    {
      this.successMsg = "Successful login";
      this.errorMsg = "";
    }
    else
    {
      this.errorMsg = "Invalid Credentials";
      this.successMsg = "";
    }
  }

  onClick(){
    this.test = "OnClick Event Handle";
    console.log("Button is clicked..!"+this.test);
  }

  onChange(){
    this.changeCount++;
    this.changeText = "OnChange Event raided "+this.changeCount+" times";
  }

  onKeyUp(event: any){
    this.keyupCount++;
    this.keyupText = "onKeyUp event handle "+this.keyupCount+" times";
    this.keyupTextValue += event.target.value +" | ";
  }
}
