import type { Meta, StoryObj } from '@storybook/react';

import AppHello from '.';
import { NextIntlClientProvider } from 'next-intl';

import messages from '@/locales/en.json';

const meta = {
  component: AppHello,
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/7.0/react/configure/story-layout
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      <NextIntlClientProvider locale="en" messages={messages}>
        <Story />
      </NextIntlClientProvider>
    ),
  ],
} satisfies Meta<typeof AppHello>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default = {
} satisfies Story;