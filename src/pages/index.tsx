import Alert from '@/components/alert';
import LoadingProcess from '@/components/loadingProcess';
import Modal from '@/components/modal/index.tsx';
import { Context, InitialState, Reducer } from '@/settings/constant';
import '@/settings/global.less';
import { ActionType, TContext } from '@/settings/type';
import Fetcher, { contentType, formatType } from 'lesca-fetcher';
import { memo, useEffect, useMemo, useReducer } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './home';
import Gtag from 'lesca-gtag';

Fetcher.install({
  hostUrl: import.meta.env.VITE_API_PATH || './api',
  contentType: contentType.JSON,
  formatType: formatType.JSON,
});

Gtag.install(import.meta.env.VITE_GA_ID);

if (import.meta.env.VITE_MOCKING === 'true') {
  import('@/mocks/browser').then((e) => {
    e.worker.start({ serviceWorker: { url: './mockServiceWorker.js' } });
  });
}

const RoutePages = memo(() => (
  <Routes>
    <Route path='/' element={<Home />} />
  </Routes>
));

const App = () => {
  const [state, setState] = useReducer(Reducer, InitialState);
  const value: TContext = useMemo(() => [state, setState], [state]);

  useEffect(() => {
    window.location.hash = '';
  }, []);

  return (
    <Context.Provider {...{ value }}>
      <div className='App'>
        <BrowserRouter>
          <RoutePages />
        </BrowserRouter>
      </div>
      {state[ActionType.LoadingProcess]?.enabled && <LoadingProcess />}
      {state[ActionType.Alert]?.enabled && <Alert />}
      {state[ActionType.modal]?.enabled && <Modal />}
    </Context.Provider>
  );
};

if (document.getElementById('app')?.children.length === 0) {
  ReactDOM.createRoot(document.getElementById('app')!).render(<App />);
}
