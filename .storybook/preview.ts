import type { Preview } from "@storybook/react";

// have problem some components replaced color bakcgorund
import '../styles.css'

import { withThemeByDataAttribute } from '@storybook/addon-themes';

/* snipped for brevity */

export const decorators = [
  withThemeByDataAttribute({
    themes: {
      light: 'light',
      dark: 'dark',
    },
    defaultTheme: 'light',
    attributeName: 'data-mode',
  }),
];

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    options: {
      storySort: (a, b) => {
        return a.title === b.title
            ? 0
            : a.id.localeCompare(b.id, { numeric: true });
      },
    },
    layout: "fullscreen",
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;