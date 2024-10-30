import React from "react";
import { shallow } from "enzyme";
import App from "./App";

describe("App Component Tests", () => {
  it("renders without crashing", () => {
    const app = shallow(<App />);
    expect(app.exists()).toBe(true);
  });

  it("renders a div with class App-header", () => {
    const app = shallow(<App />);
    expect(app.find(".App-header").exists()).toBe(true);
  });

  it("renders a div with class App-body", () => {
    const app = shallow(<App />);
    expect(app.find(".App-body").exists()).toBe(true);
  });

  it("renders a div with class App-footer", () => {
    const app = shallow(<App />);
    expect(app.find(".App-footer").exists()).toBe(true);
  });
});