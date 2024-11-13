/**
 * @jest-environment jsdom
 */
import React from "react";
import { shallow, mount } from "enzyme";
import App from "./App";
import Notifications from "../Notifications/Notifications";
import Login from "../Login/Login";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import CourseList from "../CourseList/CourseList";
import { StyleSheetTestUtils } from "aphrodite";

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

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

describe("When ctrl+h is pressed", () => {
  it("should call logOut", () => {
    const logOut = jest.fn();
    const app = mount(<App logOut={logOut} />);
    const event = new KeyboardEvent("keydown", {
      key: "h",
      ctrlKey: true,
    });
    document.dispatchEvent(event);
    expect(logOut).toHaveBeenCalled();
    app.unmount();
  });

  window.alert = jest.fn();
  it("should alert 'Logging you out'", () => {
    const app = mount(<App />);
    const event = new KeyboardEvent("keydown", {
      key: "h",
      ctrlKey: true,
    });
    document.dispatchEvent(event);
    expect(window.alert).toHaveBeenCalledWith("Logging you out");
    jest.restoreAllMocks();
    app.unmount();
  });
  window.alert.mockClear();
});

describe("App component state tests", () => {
  const app = shallow(<App />);

  it("default state for displayDrawer should be false", () => {
    expect(app.state().displayDrawer).toBe(false);
  });

  it("handleDisplayDrawer should update the state correctly", () => {
    app.instance().handleDisplayDrawer();
    expect(app.state().displayDrawer).toBe(true);
  });

  it("handleHideDrawer should update the state correctly", () => {
    app.instance().handleHideDrawer();
    expect(app.state().displayDrawer).toBe(false);
  });
});