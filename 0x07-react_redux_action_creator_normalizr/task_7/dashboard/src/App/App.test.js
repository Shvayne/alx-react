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
import { AppContext, user, logOut } from "./AppContext";

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

describe("App Component Tests with isLoggedIn state", () => {
  const appWrapper = shallow(<App />);
  appWrapper.setState({ user: { isLoggedIn: true } });

  it("should not render Login", () => {
    expect(appWrapper.contains(<Login />)).toBe(false);
  });

  it("should render CourseList", () => {
    expect(appWrapper.find(CourseList)).toHaveLength(1);
  });

  const testUser = {
    email: "test@test.com",
    password: "test",
    isLoggedIn: true,
  };
  const app = shallow(<App />);
  it("logIn function should update state correctly", () => {
    app.instance().logIn(testUser.email, testUser.password);
    expect(app.state().user).toEqual(testUser);
  });

  it("logOut function should update state correctly", () => {
    app.state().logOut();
    expect(app.state().user).toEqual(user);
  });
});

describe("When ctrl+h is pressed", () => {
  window.alert = jest.fn();
  it("should call logOut", () => {
    const app = mount(<App />);
    const event = new KeyboardEvent("keydown", {
      key: "h",
      ctrlKey: true,
    });
    document.dispatchEvent(event);
    expect(window.alert).toHaveBeenCalled();
    jest.restoreAllMocks();
    app.unmount();
  });

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

  it("markNotificationAsRead should update the state correctly", () => {
    const notifications = [
      { id: 1, type: "default", value: "New course available" },
      { id: 2, type: "urgent", value: "New resume available" },
      { id: 3, type: "urgent", html: { __html: "test" } },
    ];
    app.setState({ listNotifications: notifications });
    app.instance().markNotificationAsRead(1);
    expect(app.state().listNotifications).toEqual([
      { id: 2, type: "urgent", value: "New resume available" },
      { id: 3, type: "urgent", html: { __html: "test" } },
    ]);
  });
});