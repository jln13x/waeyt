import { Colors, extendTheme, ThemeConfig } from '@chakra-ui/react';
import { Styles } from '@chakra-ui/theme-tools';
import { Form } from './components/form';
import { Input } from './components/input';
import { Button } from './components/button';

const fonts = {
  body: 'Poppins'
};

const styles: Styles = {
  // global: {
  //   body: {
  //     bg: 'background.800',
  //     color: 'white'
  //   }
  // }
};

const colors: Colors = {
  black: '#15141b',
  white: '#F0F0F0',
  background: {
    50: '#aca9c0',
    100: '#9793af',
    200: '#8c88a6',
    300: '#767196',
    400: '#413e53',
    500: '#383548',
    600: '#2f2d3d',
    700: '#272532',
    800: '#1E1C26',
    900: '#15141b'
  },
  primary: {
    50: '#dafff4',
    100: '#aeffe4',
    200: '#7effd4',
    300: '#4dffc3',
    400: '#23ffb2',
    500: '#10e69a',
    600: '#00b377',
    700: '#008055',
    800: '#004e32',
    900: '#001c0f'
  },
  secondary: {
    50: '#f1e4ff',
    100: '#ceb3ff',
    200: '#a880ff',
    300: '#914dfe',
    400: '#811cfd',
    500: '#7603e4',
    600: '#6801b2',
    700: '#530080',
    800: '#37004f',
    900: '#17001f'
  },
  tertiary: {
    50: '#ffe3ff',
    100: '#fab2ff',
    200: '#f480ff',
    300: '#ef4efe',
    400: '#eb20fd',
    500: '#d10be5',
    600: '#a304b2',
    700: '#750080',
    800: '#47004e',
    900: '#1a001e'
  },
  danger: {
    50: '#ffe2e4',
    100: '#ffb2b5',
    200: '#ff8080',
    300: '#fe4e59',
    400: '#fe1c36',
    500: '#e50328',
    600: '#b2012e',
    700: '#80002b',
    800: '#4e001f',
    900: '#1f000f'
  },
  warning: {
    50: '#fff3dd',
    100: '#ffdeb0',
    200: '#ffc880',
    300: '#ffb14f',
    400: '#fe9b1f',
    500: '#e58308',
    600: '#b36503',
    700: '#804800',
    800: '#4e2b00',
    900: '#1e0d00'
  },
  info: {
    50: '#dbfbff',
    100: '#afeeff',
    200: '#80e1ff',
    300: '#52d6fe',
    400: '#2ecafd',
    500: '#1fb0e4',
    600: '#0f89b2',
    700: '#006280',
    800: '#003b4f',
    900: '#00151e'
  }
};

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false
};

const components = {
  Form,
  Input,
  Button
};

const theme = extendTheme({
  // config,
  fonts,
  // colors,
  // styles,
  components
});

export default theme;
