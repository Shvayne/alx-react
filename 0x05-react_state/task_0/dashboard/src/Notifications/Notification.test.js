import React from "react";
import { shallow } from "enzyme";
import Notifications from "./Notifications";
import { getLatestNotification } from "../utils/utils";
import { StyleSheetTestUtils } from "aphrodite";

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

describe("Notifications Component Tests", () => {
  it("renders without crashing", () => {
    const notifications = shallow(<Notifications />);
    expect(notifications.exists()).toBe(true);
  });

  it("should render menuItem when displayDrawer is false", () => {
    const notifications = shallow(<Notifications />);
    expect(notifications.find("div[className^='menuItem']").exists()).toBe(
      true
    );
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
    expect(notifications.find("ul").childAt(0).html()).toContain(
      "New course available"
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
    expect(notifications.find("div[className^='menuItem']").exists()).toBe(
      true
    );
  });

  it("should render the Notifications div when displayDrawer is true and no listNotifications", () => {
    const notifications = shallow(<Notifications displayDrawer />);
    expect(notifications.find("div[className^='Notifications']").exists()).toBe(
      true
    );
  });

  it("should render the Notifications div when displayDrawer is true and listNotifications is empty", () => {
    const notifications = shallow(
      <Notifications displayDrawer listNotifications={[]} />
    );
    expect(notifications.find("div[className^='Notifications']").exists()).toBe(
      true
    );
  });

  it("does not rerender the component when listNotifications prop is the same", () => {
    const listNotifications = [
      { value: "New course available", type: "default", id: 1 },
    ];
    const notifications = shallow(
      <Notifications displayDrawer listNotifications={listNotifications} />
    );
    const shouldUpdate = notifications.instance().shouldComponentUpdate({
      displayDrawer: true,
      listNotifications,
    });
    expect(shouldUpdate).toBe(false);
  });

  it("rerenders the component when listNotifications prop is greater than previous", () => {
    const listNotifications = [
      { value: "New course available", type: "default", id: 1 },
    ];
    const notifications = shallow(
      <Notifications displayDrawer listNotifications={listNotifications} />
    );
    const shouldUpdate = notifications.instance().shouldComponentUpdate({
      displayDrawer: true,
      listNotifications: [
        ...listNotifications,
        { value: "New resume available", type: "urgent", id: 2 },
      ],
    });
    expect(shouldUpdate).toBe(true);
  });
});

describe("markAsRead method Tests", () => {
  it("should call console.log", () => {
    const notWrapper = shallow(<Notifications displayDrawer />);
    const spy = jest.spyOn(console, "log").mockImplementation();
    notWrapper.instance().markAsRead(1);
    expect(spy).toHaveBeenCalledWith("Notification 1 has been marked as read");
    spy.mockRestore();
  });
});

describe("Drawer method tests", () => {
  it("should call handleDisplayDrawer when Your notifications is clicked", () => {
    const handleDisplayDrawer = jest.fn();
    const notWrapper = shallow(
      <Notifications handleDisplayDrawer={handleDisplayDrawer} />
    );
    notWrapper.find("div[className^='menuItem']").simulate("click");
    expect(handleDisplayDrawer).toHaveBeenCalled();
  });

  it("should call handleHideDrawer when close button is clicked", () => {
    const handleHideDrawer = jest.fn();
    const notWrapper = shallow(
      <Notifications handleHideDrawer={handleHideDrawer} displayDrawer />
    );
    notWrapper.find("button").simulate("click");
    expect(handleHideDrawer).toHaveBeenCalled();
  });
});