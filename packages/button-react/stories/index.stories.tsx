import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../src";
import { MenuIcon } from "icons-react";

const meta = {
  title: "Input/Button",
  component: Button,
} satisfies Meta<typeof Button>;

type Story = StoryObj<typeof meta>;

export default meta;

export const Default = {
  args: {
    children: "Click me",
  },
};

export const WithIcon = {
  title: "With Icon",
  args: {
    children: (
      <>
        <MenuIcon /> Hey
      </>
    ),
  },
};
