import React from "react";
import { shallow } from "enzyme";
import Notifications from "./Notifications";

describe("Notifications Component Tests", () => {
  it("renders without crashing", () => {
    const notifications = shallow(<Notifications />);
    expect(notifications.exists()).toBe(true);
  });

  it("renders a list of notifications", () => {
    const notifications = shallow(<Notifications />);
    expect(notifications.find("ul").exists()).toBe(true);
    expect(notifications.find("li").exists()).toBe(true);
  });

  it("renders the text 'Here is the list of notifications'", () => {
    const notifications = shallow(<Notifications />);
    expect(notifications.find("p").text()).toBe(
      "Here is the list of notifications"
    );
  });
});