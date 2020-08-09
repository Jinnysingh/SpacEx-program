import {shallow} from "enzyme"
import toJSON from "enzyme-to-json"
import React from "react"
import App from "./App.js"
import {successLaunchFilter, successLaunchLand, allFilters} from "./api.js"

test("testing the App component", ()=>{
    const wrapper = shallow(<App />)
    expect(wrapper.instance().state.loader).toBe(true);
    expect(toJSON(wrapper)).toMatchSnapshot();
})

test("useEffect is called on update", () => {
    const mockUseEffect = jest.fn();
    React.useEffect = mockUseEffect;
    const wrapper = shallow(<App />);
    mockUseEffect.mockClear();
    wrapper.update();
  });

test('the successLaunchFilter Api test', () => {
    function callback(data) {
      expect(data).toBe(1);
    }
    successLaunchFilter(callback);
  });

  test('the successLaunchLand Api test', () => {
    function callback(data) {
      expect(data).toBe(1);
    }
    successLaunchLand(callback);
  });

  test('the allFilters Api test', () => {
    function callback(data) {
      expect(data).toBe(1);
    }
    allFilters(callback);
  });