import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { BaseComponent } from '@nx-angular/xplat/core';
import { Color, Todo } from '@nx-angular/xplat/features';
import { Subject } from 'rxjs';

@Component({
  selector: 'web-todo-form',
  templateUrl: 'todo-form.component.html',
  styleUrls: ['todo-form.component.scss'],
})
export class TodoFormComponent extends BaseComponent implements OnInit {
  @Input() focusSubject!: Subject<null>;
  @Output() onSubmit: EventEmitter<Todo> = new EventEmitter();
  todoForm = new FormGroup({
    name: new FormControl(''),
    color: new FormControl(''),
  });
  colors: string[] = [
    'red',
    'orange',
    'yellow',
    'green',
    'blue',
    'indigo',
    'violet',
    'pink',
  ];

  @ViewChild('todoNameInput') todoNameInput!: ElementRef<HTMLInputElement>;

  ngOnInit(): void {
    this.focusSubject.subscribe(() => {
      this.todoNameInput.nativeElement.focus();
    });
  }

  selectColor(event: string) {
    this.todoForm.controls.color.setValue(event);
  }

  submitTodoForm(event: SubmitEvent) {
    event.preventDefault();
    this.onSubmit.emit({
      text: this.todoForm.value.name as string,
      color: this.todoForm.value.color as Color,
    });
  }
}
