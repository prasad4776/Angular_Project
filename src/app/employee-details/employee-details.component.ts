import { Component, OnInit, Input, Output , EventEmitter } from '@angular/core';


@Component({
  selector: 'app-employee-details',
  template : `<h2 [style.color] = "color1">
             Good Morning
              </h2>
              <h2 [ngStyle]="simple"> Hello All </h2>
              <h2><button (click) = "onClick()"> Click Me </button> {{ greeting }}</h2>
              <div *ngFor = "let a of students; index as i;even as e;first  as f;last as l">
                <h2>
                  {{i}} {{ a }} {{e}} {{f}} {{l}}
                </h2>


              </div>
              <h2> {{ x }} </h2>
              <h2><button (click) = "FireFunction()"> HIT! </button></h2>

              <h2> {{ name | uppercase }} </h2>


              `,
  styles : []
})
export class EmployeeDetailsComponent implements OnInit {
  public color1 = 'blue';
  public name ="";
  public simple = {color : 'green', fontStyle: 'italic',};

  public greeting = "";
  public aqq = false;
  public color = 'orange';
  public students = ['prasad', 'john', 'ron', 'daniel'];

  public date = new Date();
  @Input('mydata') public x;
  @Output() public childEvent = new EventEmitter();



  onClick(){
    console.log("HEY");
    this.greeting = "Greeting";

  }
  constructor() { }

  ngOnInit() {
  }

  FireFunction() {
    this.childEvent.emit('Running Successfullyyyy!!!!!!');

  }

}
