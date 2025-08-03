import { AuthProvider } from '@guoyunhe/react-auth';
import { CircularProgress } from '@mui/material';
import { MaterialApp } from 'material-app';
import { lazy, Suspense } from 'react';
import { CacheStore, FetchProvider } from 'react-fast-fetch';
import { Route, Switch } from 'wouter';
import xior from 'xior';
import { themes } from './config/theme';
import NotFoundPage from './pages/not-found';

// layouts
const LandingLayout = lazy(() => import('./layouts/landing'));

// landing pages
const HomePage = lazy(() => import('./pages/home'));

const store = new CacheStore();
const fetcher = (url: string) => xior.get(url).then((res) => res.data);

export default function App() {
  return (
    <FetchProvider store={store} fetcher={fetcher}>
      <Suspense
        fallback={
          <CircularProgress
            size={48}
            sx={{
              display: 'block',
              position: 'fixed',
              left: '50%',
              top: '50%',
              m: -3,
            }}
          />
        }
      >
        <MaterialApp themes={themes}>
          <AuthProvider>
            <Switch>
              <Route>
                <LandingLayout>
                  <Switch>
                    <Route path="/" component={HomePage} />
                    <Route component={NotFoundPage} />
                  </Switch>
                </LandingLayout>
              </Route>
            </Switch>
          </AuthProvider>
        </MaterialApp>
      </Suspense>
    </FetchProvider>
  );
}
