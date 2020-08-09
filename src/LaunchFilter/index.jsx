import React from 'react';
import LaunchYear from './LaunchYears/index.jsx';
import SuccessLaunch from './SuccessLaunch/index.jsx';
import SuccessLaing from './SucessLaing/index.jsx';


const launchYears = [2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020]
const successfulLaunch = ["True", "False"]
const successfulLaing = ["True", "False"]


function LaunchFilter(props) {
    return (
      <aside className="card launch-card mt-20">
      <h5 className="text-left">Filters</h5>
      <LaunchYear launchFilters={launchYears} handleFilters={props.handleFilters}/>
      <SuccessLaunch launchFilters={successfulLaunch} handleFilters={props.handleFilters}/>
      <SuccessLaing launchFilters={successfulLaing} handleFilters={props.handleFilters}/>
      </aside>
    );
  }

  
export default LaunchFilter