import React from "react";
import { shallow } from "enzyme";
import WithLogging from "./WithLogging";
import Login from "../Login/Login";

const TestComponent = () => <div>Test component</div>;

describe("WithLogging on pure HTML", () => {
  it("should log component mounting", () => {
    const spy = jest.spyOn(console, "log");
    const WithLoggingTestComponent = WithLogging(TestComponent);
    shallow(<WithLoggingTestComponent />);
    expect(spy).toHaveBeenCalledWith("Component TestComponent is mounted");
    spy.mockRestore();
  });

  it("should log component unmounting", () => {
    const spy = jest.spyOn(console, "log");
    const WithLoggingTestComponent = WithLogging(TestComponent);
    const wrapper = shallow(<WithLoggingTestComponent />);
    wrapper.unmount();
    expect(spy).toHaveBeenCalledWith(
      "Component TestComponent is going to unmount"
    );
    spy.mockRestore();
  });
});

describe("WithLogging on React component", () => {
  it("should log component mounting", () => {
    const spy = jest.spyOn(console, "log");
    const WithLoggingLogin = WithLogging(Login);
    shallow(<WithLoggingLogin />);
    expect(spy).toHaveBeenCalledWith("Component Login is mounted");
    spy.mockRestore();
  });

  it("should log component unmounting", () => {
    const spy = jest.spyOn(console, "log");
    const WithLoggingLogin = WithLogging(Login);
    const wrapper = shallow(<WithLoggingLogin />);
    wrapper.unmount();
    expect(spy).toHaveBeenCalledWith("Component Login is going to unmount");
    spy.mockRestore();
  });
});