import {mount} from "enzyme"
import toJSON from "enzyme-to-json"
import React from "react"
import LaunchYears from "./LaunchYears.jsx"

let launchFilters = [2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020]

describe('<launchYears />', () => {
    const wrapper = mount(
      <LaunchYears launchFilters={launchFilters} />
    );

test("testing the filters", ()=>{
  expect(launchFilters).not.toBe(0);
  expect(toJSON(wrapper)).toMatchSnapshot();
})
})