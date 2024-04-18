'use client';

import { ThemeProvider as NextThemeProvider, useTheme } from 'next-themes';
import { type ThemeProviderProps } from 'next-themes/dist/types';

export default function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemeProvider {...props}>{children}</NextThemeProvider>;
}
