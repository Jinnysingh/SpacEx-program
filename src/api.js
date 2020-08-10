const fetch = require('node-fetch');

export const allData = fetch("https://api.spacexdata.com/v3/launches?limit=100")
.then((data)=>{
    return data
})
.catch(err =>{
    console.error("error in allData api calling", err)
})

export const successLaunchFilter = (value, type) => fetch(`https://api.spaceXdata.com/v3/launches?limit=100&amp;${type}=${value}`)
.then((data)=>{
    return data
})
.catch(err =>{
    console.error("error in successLaunchFilter api calling", err)
})

export const successLaunchLand = (launch_success, land_success) => fetch(`https://api.spaceXdata.com/v3/launches?limit=100&amp;launch_success=${launch_success}&amp;land_success=${land_success}`)
.then((data)=>{
    return data
})
.catch(err =>{
    console.error("error in successLaunchLand api calling", err)
})

export const allFilters = (launch_success, land_success, launch_year) => fetch(`https://api.spaceXdata.com/v3/launches?limit=100&amp;launch_success=${launch_success}&amp;land_success=${land_success}&amp;launch_year=${launch_year}`)
.then((data)=>{
    return data
})
.catch(err =>{
    console.error("error in allFilters api calling", err)
})