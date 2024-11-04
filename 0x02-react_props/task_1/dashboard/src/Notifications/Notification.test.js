import React from "react";
import { shallow } from "enzyme";
import Notifications from "./Notifications";
import NotificationItem from "./NotificationItem";

describe("Notifications Component Tests", () => {
  it("renders without crashing", () => {
    const notifications = shallow(<Notifications />);
    expect(notifications.exists()).toBe(true);
  });

  it("renders a list of NotificationItem components with correct HTML", () => {
    const notifications = shallow(<Notifications />);
    expect(notifications.find("ul").exists()).toBe(true);
    notifications.find("ul").forEach((listItem) => {
      expect(listItem.equals(<NotificationItem />));
    });
    expect(notifications.find("ul").childAt(0).html()).toEqual(
      '<li data-notification-type="default">New course available</li>'
    );
  });

  it("renders the text 'Here is the list of notifications'", () => {
    const notifications = shallow(<Notifications />);
    expect(notifications.find("p").text()).toBe(
      "Here is the list of notifications"
    );
  });
});