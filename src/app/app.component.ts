import {Component, OnInit} from '@angular/core';
import {todo} from "../models/todo";
import {FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit{
  //ça c'est une méthode
  title = 'todolist-angular';
  public todoList: Array<todo> = [
    {
      label:'food',
      at: new Date(),
      finished: true,
    },
    {
      label:'bar',
      at: new Date(),
      finished: false,
    },
    {
      label:'foodbar',
      at: new Date(),
      finished: true,
    }


  ];

  public  form = this.fb.array([  // mon formulaire est composée de toute la suite
    this.fb.group({
      label: [''],
      at: [new Date()],
      finished:[false],
    }),
  ]);

  public constructor(
    private  fb: FormBuilder,
  ) {
  }
  public ngOnInit(): void {
    this.form.setValue(this.todoList);
  }


  // public  get todoList(): Array<string>{
  //   const  arr: Array<string> = [];
  //
  //   for (let i = 0; i < 10; i++){
  //     arr.push('item' + i);
  //   }
  //   return arr;
  // }


}

