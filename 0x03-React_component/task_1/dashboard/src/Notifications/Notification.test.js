import React from "react";
import { shallow } from "enzyme";
import Notifications from "./Notifications";
import { getLatestNotification } from "../utils/utils";

describe("Notifications Component Tests", () => {
  it("renders without crashing", () => {
    const notifications = shallow(<Notifications />);
    expect(notifications.exists()).toBe(true);
  });

  it("should render menuItem when displayDrawer is false", () => {
    const notifications = shallow(<Notifications />);
    expect(notifications.find(".menuItem").exists()).toBe(true);
  });

  it("should not render the Notifications div when displayDrawer is false", () => {
    const notifications = shallow(<Notifications />);
    expect(notifications.find(".Notifications").exists()).toBe(false);
  });

  it("renders a list with correct HTML when listNotifications is provided", () => {
    const listNotifications = [
      { value: "New course available", type: "default", id: 1 },
      { value: "New resume available", type: "urgent", id: 2 },
      { html: { __html: getLatestNotification() }, type: "urgent", id: 3 },
    ];
    const notifications = shallow(
      <Notifications displayDrawer listNotifications={listNotifications} />
    );
    expect(notifications.find("ul").exists()).toBe(true);
    expect(notifications.find("ul").children()).toHaveLength(3);
    expect(notifications.find("ul").childAt(0).html()).toEqual(
      '<li data-notification-type="default">New course available</li>'
    );
  });

  it("renders the text 'Here is the list of notifications' when listNotifications is provided", () => {
    const listNotifications = [
      { value: "New course available", type: "default", id: 1 },
    ];
    const notifications = shallow(
      <Notifications displayDrawer listNotifications={listNotifications} />
    );
    expect(notifications.find("p").text()).toBe(
      "Here is the list of notifications"
    );
  });

  it("renders the text 'No new notification for now' when no listNotifications", () => {
    const notifications = shallow(<Notifications displayDrawer />);
    expect(notifications.find("p").text()).toBe("No new notification for now");
  });

  it("should render menuItem when displayDrawer is true", () => {
    const notifications = shallow(<Notifications displayDrawer />);
    expect(notifications.find(".menuItem").exists()).toBe(true);
  });

  it("should render the Notifications div when displayDrawer is true and no listNotifications", () => {
    const notifications = shallow(<Notifications displayDrawer />);
    expect(notifications.find(".Notifications").exists()).toBe(true);
  });

  it("should render the Notifications div when displayDrawer is true and listNotifications is empty", () => {
    const notifications = shallow(
      <Notifications displayDrawer listNotifications={[]} />
    );
    expect(notifications.find(".Notifications").exists()).toBe(true);
  });
});