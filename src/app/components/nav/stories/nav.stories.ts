import { moduleMetadata } from '@storybook/angular';
import type { Meta, StoryObj } from '@storybook/angular';
import { NavComponent } from '../nav.component';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

@NgModule({
  declarations: [NavComponent],
  exports: [NavComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
class WorkaroundModule { }

const meta: Meta<NavComponent> = {
  title: 'Example/Nav',
  component: NavComponent,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [WorkaroundModule],
    }),
  ],
};

export default meta;
type Story = StoryObj<NavComponent>;

export const LoggedIn: Story = {
  args: {
    user: {
      name: 'Jane Doe',
    },
  },
};
