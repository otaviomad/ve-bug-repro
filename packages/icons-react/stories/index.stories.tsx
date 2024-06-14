import type { StoryObj } from "@storybook/react";
import { ChevronRightIcon, MenuIcon } from "../src";

const meta = {
  title: "Display/Icons",
};

type Story = StoryObj<typeof meta>;

export default meta;

export const Default: Story = {
  render: () => (
    <>
      <ChevronRightIcon />
      <MenuIcon />
    </>
  ),
};
