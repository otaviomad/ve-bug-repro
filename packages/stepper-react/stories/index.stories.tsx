import type { Meta, StoryObj } from "@storybook/react";

import { Stepper } from "../src";

const meta = {
  title: "Input/Stepper",
  component: Stepper,
} satisfies Meta<typeof Stepper>;

type Story = StoryObj<typeof meta>;

export default meta;

export const Default: Story = {};
