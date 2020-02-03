import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-binding',
  /* templateUrl: './class-binding.component.html',
  styleUrls: ['./class-binding.component.css'] */
  template: `
    <div>
      <h2>Attribute Binding Example</h2>
      <h3 [textContent] = "headerValue" ></h3>
      <table>
        <!--> <tr>
          <td colspan="{{4}}"></td>
        </tr> -->
        <tr>
          <td [attr.colspan]="attrValue">three</td>
        </tr>
        <tr>
          <td>1</td>
          <td>2</td>
          <td>3</td>
          <td>4</td>
        </tr>
      </table>
    </div>
    <div>
      <h2 class='text-success'>Class Binding</h2>
      <h2 [class]='successClass'>Class Binding</h2>
      <h2 class='text-special' [class]='successClass'>Class Binding</h2>
      <h2 [ngClass]='msgClass'>Class Binding with ngClass</h2>
    </div>
    <div>
      <h3>Using Interpolation = {{windowLocation}}</h3>
      <h3>3+4 = {{3+4}}</h3>
      <h3>name.length = {{name.length}}</h3>
      <h3>name.toUpperCase() = {{name.toUpperCase()}}</h3>
    </div>
    <div>
      <h3 [style.color]="'pink'">Style Binding</h3>
      <h3 [style.color]=" hasError ? 'red' : 'green' ">Style Binding</h3>
      <h3 [style.color]="highlightColor">Style Binding 2</h3>
      <h3 [ngStyle]="titleStyles">Style Binding </h3>
    </div>
    <div>
      <h3>Template Reference</h3>
      <input #myInput type='text'>
      <button (click)="logMsg(myInput.value)">Log</button>
      {{templateRef}}
    </div>
  `,
  styles: [`
    .text-success{
      color: green;
    }
    .text-danger{
      color: red;
    }
    .text-special{
      font-style: italic;
    }
  `]
})
export class ClassBindingComponent implements OnInit {
  public headerValue : string = "Attribute binding with h3 tag";
  public attrValue : number = 3;

  public name : string = "Interpolation";
  public windowLocation = window.location.href;

  public successClass = "text-success";
  public hasError = true;
  public isSpecial = true;
  public msgClass = {
    "text-success" : !this.hasError,
    "text-danger" : this.hasError,
    "text-special" : this.isSpecial
  }
  public highlightColor = "aqua";
  public titleStyles = {
    color : "blue",
    fontStyle : "italic"
  }

  public templateRef = "";
  public logMsg(value){
    console.log(value);
    this.templateRef = value;
  }

  constructor() { }

  ngOnInit() {
  }

}
