// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Provider } from 'react-redux';
import SignInSide from './LoginPage';
import Landingpage from './Landingpage';
import LoginPage from './LoginPage';
import SearchPage from './joblistings';
import CreateResume from './resume';
import store from './store';
import AdminPage from './adminmain';
import FeedbackPage from './feedbackpage';
import Apply from './apply';
// import Log from './log';
// import Signup from './signup';

import { createRoot } from 'react-dom';
const root = createRoot(document.getElementById('root'));




root.render(
  <Provider store={store}>
    <SignInSide />
    <Landingpage />
    <LoginPage/>
    {/* <Log/> */}
    <SearchPage/>
    <CreateResume/>
    <AdminPage />
    <FeedbackPage/>
    <Apply/>
    {/* <Signup/> */}
  </Provider>
);
