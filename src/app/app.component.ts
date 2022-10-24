import { Task } from './models/task.model';
import { Component, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Taskbox';

  tasks: Task[] = [
    {
      id: '1',
      title: 'Task 1',
      state: 'TASK_INBOX',
    },
    {
      id: '2',
      title: 'Task 2',
      state: 'TASK_INBOX',
    },
    {
      id: '3',
      title: 'Task 3',
      state: 'TASK_INBOX',
    },
    {
      id: '4',
      title: 'Task 4',
      state: 'TASK_INBOX',
    },
    {
      id: '5',
      title: 'Task 5',
      state: 'TASK_INBOX',
    },
    {
      id: '6',
      title: 'Task 6',
      state: 'TASK_INBOX',
    },
  ];

  onPinTask(event: any) {}

  onArchiveTask(event: any) {}
}
