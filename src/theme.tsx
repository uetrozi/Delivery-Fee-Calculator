

import { extendTheme, ThemeConfig, withDefaultColorScheme } from '@chakra-ui/react';

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

const theme = extendTheme(
  {
    config,
  },
  withDefaultColorScheme({ colorScheme: 'cyan' })
);

export default theme;
