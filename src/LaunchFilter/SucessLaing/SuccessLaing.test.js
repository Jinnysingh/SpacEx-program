import {mount} from "enzyme"
import toJSON from "enzyme-to-json"
import React from "react"
import SuccessLaing from "./SuccessLaing.jsx"

let launchFilters = ["true", "false"]

describe('<SuccessLaing />', () => {
    const wrapper = mount(
      <SuccessLaing launchFilters={launchFilters} />
    );

test("testing the filters", ()=>{
  expect(launchFilters).not.toBe(0);
  expect(toJSON(wrapper)).toMatchSnapshot();
})
})