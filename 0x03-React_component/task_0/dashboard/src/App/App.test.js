import React from "react";
import { shallow } from "enzyme";
import App from "./App";
import Notifications from "../Notifications/Notifications";
import Login from "../Login/Login";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import CourseList from "../CourseList/CourseList";

describe("App Component Tests", () => {
  it("renders without crashing", () => {
    const app = shallow(<App />);
    expect(app.exists()).toBe(true);
  });

  it("should contain Notifications, Header, Login and Footer components", () => {
    const notifications = shallow(<App />).find(Notifications);
    const login = shallow(<App />).find(Login);
    const header = shallow(<App />).find(Header);
    const footer = shallow(<App />).find(Footer);
    expect(notifications.exists()).toBe(true);
    expect(login.exists()).toBe(true);
    expect(header.exists()).toBe(true);
    expect(footer.exists()).toBe(true);
  });

  it("should not render CourseList", () => {
    const courseList = shallow(<App />).find(CourseList);
    expect(courseList.exists()).toBe(false);
  });
});

describe("App Component Tests with isLoggedIn prop", () => {
  it("should not render Login", () => {
    const login = shallow(<App isLoggedIn={true} />).find(Login);
    expect(login.exists()).toBe(false);
  });

  it("should render CourseList", () => {
    const courseList = shallow(<App isLoggedIn={true} />).find(CourseList);
    expect(courseList.exists()).toBe(true);
  });
});