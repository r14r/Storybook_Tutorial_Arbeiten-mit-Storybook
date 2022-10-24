import { moduleMetadata, Meta, Story } from '@storybook/angular';
import { CommonModule } from '@angular/common';

import { fireEvent, within } from '@storybook/testing-library';

import { InboxScreenPureComponent } from './component';

import { TaskModule } from '../module';

import { Store, NgxsModule } from '@ngxs/store';
import { TasksState } from '../../state/task';

export default {
  component: InboxScreenPureComponent,
  decorators: [
    moduleMetadata({
      imports: [CommonModule, TaskModule, NgxsModule.forRoot([TasksState])],
      providers: [Store],
    }),
  ],
  title: 'PureInboxScreen',
} as Meta;

const Template: Story = (args) => ({
  props: args,
});

export const Default = Template.bind({});

export const Error = Template.bind({});
Error.args = {
  error: true,
};

export const WithInteractions = Template.bind({});
WithInteractions.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  // Simulates pinning the first task
  await fireEvent.click(canvas.getByLabelText('pinTask-1'));
  // Simulates pinning the third task
  await fireEvent.click(canvas.getByLabelText('pinTask-3'));
};