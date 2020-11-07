import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public todos: string[] = [];
  todoForm = new FormGroup({
    todo: new FormControl('', Validators.required)
  });
  public onSubmit(): void {
    if (this.todoForm.value.todo !== '') {
      this.todos.push(this.todoForm.value.todo);
      this.todoForm.setValue({
        todo: ''
      });
    }
  }
}
