import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

// import LogIn from 'pages/LogIn/LogIn';

const Layout = lazy(() => import('../components/Layout/Layout'));
const Home = lazy(() => import('../pages/Home/Home'));
const Contacts = lazy(() => import('../pages/Contacts/Contacts'));
const Register = lazy(() => import('../pages/Register/Register'));
// const LogIn = lazy(() => import('../pages/LogIn/LogIn'));

const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/register" element={<Register />} />
          {/* <Route path="/login" element={<LogIn />} /> */}
        </Route>
      </Routes>
    </Suspense>
  );
};

export default App;
