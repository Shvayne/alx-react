import { getFooterCopy, getFullYear, getLatestNotification } from "./utils";

describe("Test getFullYear", () => {
  it("should return the current year", () => {
    expect(getFullYear()).toEqual(new Date().getFullYear());
  });
});

describe("Test getFooterCopy", () => {
  it("should return 'Holberton School' when passed true", () => {
    expect(getFooterCopy(true)).toEqual("Holberton School");
  });
  it("should return 'Holberton School main dashboard' when passed false", () => {
    expect(getFooterCopy(false)).toEqual("Holberton School main dashboard");
  });
});

describe("Test getLatestNotification", () => {
  it("should return '<strong>Urgent requirement</strong> - complete by EOD'", () => {
    expect(getLatestNotification()).toEqual(
      "<strong>Urgent requirement</strong> - complete by EOD"
    );
  });
});