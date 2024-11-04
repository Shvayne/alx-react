import React from "react";
import { shallow } from "enzyme";
import App from "./App";
import Notifications from "../Notifications/Notifications";
import Login from "../Login/Login";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

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
});