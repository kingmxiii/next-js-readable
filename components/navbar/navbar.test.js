import React from "react";
import { shallow } from "enzyme";

import Navbar from "./navbar";

describe("Navbar Tests", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Navbar />);
  });

  it("renders navbar component", () => {
    expect(wrapper.isEmptyRender()).toBe(false);
  });

  it("renders App logo", () => {
    const appLogo = wrapper.find('[data-test="app-logo"]');
    expect(appLogo.length).toBe(1);
  });

  it("renders Home link", () => {
    const homeLink = wrapper.find('[data-test="home-link"]');
    expect(homeLink.length).toBe(1);
  });
});
