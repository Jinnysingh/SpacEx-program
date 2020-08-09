import {mount} from "enzyme"
import toJSON from "enzyme-to-json"
import React from "react"
import SuccessLaunch from "./SuccessfulLaunch.jsx"

let launchFilters = ["true", "false"]

describe('<SuccessLaunch />', () => {
    const wrapper = mount(
      <SuccessLaunch launchFilters={launchFilters} />
    );

test("testing the filters", ()=>{
  expect(launchFilters).not.toBe(0);
  expect(toJSON(wrapper)).toMatchSnapshot();
})
})