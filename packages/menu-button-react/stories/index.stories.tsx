import type { Meta, StoryObj } from "@storybook/react";

import { MenuButton } from "../src";

const meta = {
  title: "Input/MenuButton",
  component: MenuButton,
} satisfies Meta<typeof MenuButton>;

type Story = StoryObj<typeof meta>;

export default meta;

export const Default: Story = {};
