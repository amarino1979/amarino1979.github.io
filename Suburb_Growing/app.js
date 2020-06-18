const baseURL = `http://harvesthelper.herokuapp.com/api/v1/plants?api_key=3d61aab31f7111f646d7d1985662a0ec`
const api_key = `3d61aab31f7111f646d7d1985662a0ec`
const queryType = `=`
let titleQuery = ''
let queryURL = baseURL

console.log(baseURL)

let gardenData = [];
$(() => { 

    $.ajax({
        type: 'get', 
        url: baseURL
    }).then((dataSet) => {
        gardenData = dataSet
        console.log(gardenData)
        gardenData.forEach((element) => {
            let opElem = $(`<option> ${element.name} </option>`)
            $('#dropdown').append(opElem)
        })
    }) 
    //populate a drop down by name
    //
    //need to add event listener for

    //
})