import {Component, OnInit} from '@angular/core';
import {Todo} from '../models/todo';
import {AbstractControl, FormBuilder, FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'todolist-angular';
  public todoList: Array<Todo> = [
    {
      label: 'foo',
      at: new Date(),
      finished: true,
    }, {
      label: 'bar',
      at: new Date(),
      finished: false,
    }, {
      label: 'foobar',
      at: new Date(),
      finished: true,
    }
  ];

  // new FormArray();
  public form = this.fb.array([]);

  public constructor(
    private fb: FormBuilder,
  ) {
  }

  public ngOnInit(): void {
    for (let i = 0; i < this.todoList.length; i++) {
      this.addTodo();
    }

    this.form.setValue(this.todoList);
  }

  public addTodo(): void {
    this.form.push(
      // new FormGroup();
      this.fb.group({
        // new FormControl();
        label: [''],
        // new FormControl();
        at: [new Date()],
        // new FormControl();
        finished: [false],
      })
    );
  }

  public getControl(formGroup: AbstractControl, key: string): FormControl
  {
    if (!(formGroup instanceof FormGroup)) {
      throw new Error('Form given as first argument is not an instance of FormGroup');
    }

    const fc = formGroup.get(key);
    if (!(fc instanceof FormControl)) {
      throw new Error('Form retrieve is not an instance of FormControl');
    }

    return fc;
  }

  // public getControl(formGroup: AbstractControl, key: string): FormControl
  // {
  //   return (formGroup as FormGroup).get(key) as FormControl;
  // }
}
