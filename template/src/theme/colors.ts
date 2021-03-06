import { useColorScheme } from 'react-native';

export interface Colors {
  primary: string;
  white: string;
  light: string;
  black: string;
  dark: string;
}

export const LightColors: Colors = {
  primary: '#5ed4f3',
  white: '#fff',
  light: '#f2f2f2',
  black: '#20232a',
  dark: '#282c34',
};

export const DarkColors: Colors = {
  ...LightColors,
  white: '#20232a',
  light: '#282c34',
  black: '#fff',
  dark: '#f2f2f2',
};

const useColors = () => {
  const scheme = useColorScheme();
  const isDark = scheme === 'dark';
  const colors = isDark ? DarkColors : LightColors;
  return { colors, isDark };
};

export default useColors;
