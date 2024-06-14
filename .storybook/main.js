import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";

/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
  stories: ["../packages/**/stories/index*.stories.@(ts|tsx)"],
  addons: [
    "@storybook/addon-onboarding",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  viteFinal: (config) => {
    config.plugins.push(vanillaExtractPlugin());
    return config;
  },
};
export default config;
