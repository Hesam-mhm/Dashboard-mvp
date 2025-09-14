import { lazy, FC, Suspense } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { MasterLayout } from '../../_metronic/layout/MasterLayout';
import TopBarProgress from 'react-topbar-progress-indicator';
import { getCSSVariableValue } from '../../_metronic/assets/ts/_utils';
import { RouteMapper } from './RouteMapper/RouteMapper';
import { useTheme } from '@mui/material';
import { Home } from '../pages/Home/Home';
import DashboardBuilder from '../pages/dashboard-builder/DashboardBuilder';
import ChartsExample from '../pages/ChartsExample/ChartsExample';

// const FinancialManagerReviewAdvancePayment = lazy(
//   () =>
//     import('../pages/Automation/RequestForAdvancePayment/FinancialManager/FinancialManagerReviewAdvancePayment/FinancialManagerReviewAdvancePayment'),
// );
// const Home = lazy(() => import('../../app/pages/Home/Home').then((module) => ({ default: module.Home })));

// _______________________________________________________________________________

TopBarProgress.config({
  barColors: {
    '0': getCSSVariableValue('--bs-primary'),
    '1.0': getCSSVariableValue('--bs-primary'),
  },
  barThickness: 3,
  shadowBlur: 5,
});

// Fallback loading component
const LoadingFallback: FC = () => (
  <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
    <TopBarProgress />
  </div>
);

const PrivateRoutes = () => {
  const theme = useTheme();
  return (
    <Routes>
      <Route element={<MasterLayout />}>
        {/* Home route */}
        <Route
          path={RouteMapper.Home.path}
          element={
            <Suspense fallback={<LoadingFallback />}>
              <Home open={false} onClose={() => {}} />
            </Suspense>
          }
        />
        <Route
          path={RouteMapper.DashboardBuilder.path}
          element={
            <Suspense fallback={<LoadingFallback />}>
              <DashboardBuilder />
            </Suspense>
          }
        />
        <Route
          path={RouteMapper.ChartsExample.path}
          element={
            <Suspense fallback={<LoadingFallback />}>
              <ChartsExample />
            </Suspense>
          }
        />

        {/* Page Not Found */}
        <Route path="*" element={<Navigate to="/error/404" />} />
      </Route>
    </Routes>
  );
};

export { PrivateRoutes };
