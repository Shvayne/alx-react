import React from "react";
import Notifications from "../Notifications/Notifications";
import Login from "../Login/Login";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "./App.css";
import PropTypes from "prop-types";
import CourseList from "../CourseList/CourseList";

const App = ({ isLoggedIn = false }) => {
  return (
    <>
      <Notifications />
      <div className="App">
        <Header />
        {isLoggedIn ? <CourseList /> : <Login />}
        <Footer />
      </div>
    </>
  );
};

App.propTypes = {
  isLoggedIn: PropTypes.bool,
};

export default App;