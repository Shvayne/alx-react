import React from "react";
import { shallow } from "enzyme";
import NotificationItem from "./NotificationItem";

describe("NotificationItem test", () => {
  it("renders without crashing", () => {
    const notItemWrapper = shallow(<NotificationItem />);
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
    expect(notItemWrapper.find("li").html()).toBe(
      '<li data-notification-type="default"><u>test</u></li>'
    );
  });
});