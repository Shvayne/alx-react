import React from "react";
import { shallow } from "enzyme";
import NotificationItem from "./NotificationItem";
import { StyleSheetTestUtils } from "aphrodite";

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

describe("NotificationItem test", () => {
  it("renders without crashing", () => {
    const notItemWrapper = shallow(<NotificationItem type="default" />);
    expect(notItemWrapper.exists()).toBe(true);
  });

  it("renders with correct type and value", () => {
    const notItemWrapper = shallow(
      <NotificationItem type="default" value="test" />
    );
    expect(notItemWrapper.find("li").text()).toBe("test");
    expect(notItemWrapper.find("li").prop("data-notification-type")).toBe(
      "default"
    );
  });

  it("renders with correct html", () => {
    const notItemWrapper = shallow(
      <NotificationItem html={{ __html: "<u>test</u>" }} type="default" />
    );
    expect(notItemWrapper.find("li").html()).toContain("<u>test</u>");
  });
});

describe("markAsRead test", () => {
  it("markAsRead is called with correct ID argument", () => {
    const markAsRead = jest.fn();
    const notItemWrapper = shallow(
      <NotificationItem value="test" markAsRead={markAsRead} />
    );
    notItemWrapper.setProps({ id: 2 });
    notItemWrapper.find("li").props({ id: 2 }).onClick();
    expect(markAsRead).toHaveBeenCalledWith(2);
    markAsRead.mockRestore();
  });
});