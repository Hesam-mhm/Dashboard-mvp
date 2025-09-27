import { Suspense, useMemo, lazy } from 'react';
import { Outlet } from 'react-router-dom';
import { LayoutProvider, LayoutSplashScreen } from '../_metronic/layout/core';
import { MasterInit } from '../_metronic/layout/MasterInit';
import { AuthInit } from './modules/auth';
import { ThemeModeProvider } from '../_metronic/partials';
import { I18nProvider } from '../_metronic/i18n/i18nProvider';
import { MetronicI18nProvider } from '../_metronic/i18n/Metronici18n';
import rtlPlugin from 'stylis-plugin-rtl';
import { prefixer } from 'stylis';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { PaginationProvider } from './context/PaginationContext';
import { ChartProvider } from './context/ChartContext';

const App = () => {
  const cacheRtl = useMemo(
    () =>
      createCache({
        key: 'muirtl',
        stylisPlugins: [prefixer, rtlPlugin],
      }),
    [],
  );

  const theme = useMemo(
    () =>
      createTheme({
        direction: 'rtl',
        palette: {
          mode: 'light',
        },
      }),
    [],
  );

  const appContent = useMemo(
    () => (
      <MetronicI18nProvider>
        <I18nProvider>
          <CacheProvider value={cacheRtl}>
            <Suspense fallback={<LayoutSplashScreen />}>
              <AuthInit>
                <LayoutProvider>
                  <MasterInit />
                  <ThemeProvider theme={theme}>
                    <ThemeModeProvider>
                      <PaginationProvider>
                        <ChartProvider>
                          <Outlet />
                        </ChartProvider>
                      </PaginationProvider>
                    </ThemeModeProvider>
                  </ThemeProvider>
                </LayoutProvider>
              </AuthInit>
            </Suspense>
          </CacheProvider>
        </I18nProvider>
      </MetronicI18nProvider>
    ),
    [cacheRtl, theme],
  );

  return appContent;
};

export { App };
