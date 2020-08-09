import {shallow} from "enzyme"
import toJSON from "enzyme-to-json"
import React from "react"
import LaunchFilter from "./LaunchFilter.jsx"


test("testing the filters", ()=>{
    const wrapper = shallow(<LaunchFilter />)
    expect(toJSON(wrapper)).toMatchSnapshot();
})