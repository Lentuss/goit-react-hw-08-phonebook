import { lazy, Suspense, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchUser } from 'redux/auth/authOperations';

import PrivateRoute from './Routes/PrivateRoute';
import PublicRoute from './Routes/PublicRoute';

const Layout = lazy(() => import('../components/Layout/Layout'));
const Home = lazy(() => import('../pages/Home/Home'));
const Contacts = lazy(() => import('../pages/Contacts/Contacts'));
const Register = lazy(() => import('../pages/Register/Register'));
const LoginPage = lazy(() => import('../pages/LoginPage/LoginPage'));
const NotFound = lazy(() => import('../pages/NotFound/NotFound'));

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path="/contacts"
            element={
              <PrivateRoute restricted>
                <Contacts />
              </PrivateRoute>
            }
          />
          <Route
            path="/register"
            element={
              <PublicRoute restricted>
                <Register />
              </PublicRoute>
            }
          />
          <Route
            path="/login"
            element={
              <PublicRoute restricted>
                <LoginPage />
              </PublicRoute>
            }
          />
          <Route path="*" element={<NotFound />}></Route>
        </Route>
      </Routes>
    </Suspense>
  );
};

export default App;
