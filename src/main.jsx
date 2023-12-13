import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./LoginPage";
import SignInSide from "./signin";
import Landingpage from "./landingpage";
import SearchPage from "./joblistings";
import AdminLogin from "./adminlogin";
import CompanyLogin from "./companylogin";
import CreateResume from "./resume";
import JobPostingForm from "./jobposting";
import MyComponent from "./postingmain";
import JobInfoPage from "./jobinfostat";
import JobInfoPageai from "./jobinfoai";
import AdminPage from "./adminmain";
import FeedbackPage from "./feedbackpage";
import Apply from "./apply";
// import Log from './log';

import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import userReducer from "./userSlice";
// import Signup from './signup';

const store = configureStore({
  reducer: {
    user: userReducer,
  },
});
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signin" element={<SignInSide />} />
          <Route path="/" element={<Landingpage />} />
          <Route path="/joblistings" element={<SearchPage />} />
          <Route path="/resume" element={<CreateResume />} />
          <Route path="/admin" element={<AdminLogin />} />
          <Route path="/company" element={<CompanyLogin />} />
          <Route path="/jobposting" element={<JobPostingForm />} />
          <Route path="/postingmain" element={<MyComponent />} />
          <Route path="/jobinfostat" element={<JobInfoPage />} />
          <Route path="/jobinfoai" element={<JobInfoPageai />} />
          <Route path="/adminmain" element={<AdminPage />} />
          <Route path="/feedbackpage" element={<FeedbackPage />} />
          <Route path="/apply" element={<Apply />} />
          {/* <Route path="/log" element={<Log/>}/> 
      <Route path="/signup" element={<Signup/>}/>  */}
        </Routes>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
