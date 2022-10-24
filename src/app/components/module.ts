
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxsModule } from '@ngxs/store';

import { TaskComponent } from './task/component';
import { TaskListComponent } from './task-list/component';
import { TasksState } from '../state/task';
import { TaskListPureComponent } from './task-list-pure/component'

@NgModule({
  imports: [CommonModule, NgxsModule.forFeature([TasksState])],
  exports: [TaskComponent, TaskListComponent, TaskListPureComponent],
  declarations: [TaskComponent, TaskListComponent, TaskListPureComponent],
  providers: [],
})
export class TaskModule {}
