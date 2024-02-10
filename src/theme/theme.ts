import {createTheme} from '@shopify/restyle';

const palette = {
  slate50: '#F8FAFC',
  slate100: '#F1F5F9',
  slate200: '#E2E8F0',
  slate300: '#CBD5E1',
  slate400: '#94A3B8',
  slate500: '#64748B',
  slate600: '#475569',
  slate700: '#334155',
  slate800: '#1E293B',
  slate900: '#0F172A',
  lime300: '#BEF264',
  lime400: '#A3E635',
  logo: '#D1F593',
  black: '#000000',
};

export const theme = createTheme({
  colors: {
    ...palette,
    primary: palette.lime400,
    background: palette.slate900,
    logo: palette.logo,
  },
  spacing: {
    s0: 0,
    s2: 2,
    s4: 4,
    s8: 8,
    s10: 10,
    s12: 12,
    s14: 14,
    s16: 16,
    s20: 20,
    s24: 24,
    s32: 32,
    s40: 40,
    s48: 48,
    s56: 56,
    s116: 116,
  },
  borderRadii: {
    s6: 6,
    s8: 8,
    s12: 12,
    s16: 16,
  },
  textVariants: {
    defaults: {},
  },
});

export type Theme = typeof theme;
export type ThemeColors = keyof Theme['colors'];
