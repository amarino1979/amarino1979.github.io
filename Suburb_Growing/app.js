const baseURL = `http://harvesthelper.herokuapp.com/api/v1/plants?api_key=3d61aab31f7111f646d7d1985662a0ec`
const api_key = `3d61aab31f7111f646d7d1985662a0ec`
const queryType = `=`
let titleQuery = ''
let queryURL = baseURL

console.log(baseURL)

let gardenData = [];
//gardenData
// function myFunction() {
//     gardenData.sort();
// }
$(() => { 

    $.ajax({
        type: 'get', 
        url: baseURL
    }).then((dataSet) => {
        //populate a drop down by name by alphabetical order
        gardenData = dataSet.sort((a, b) => (a.name > b.name) ? 1 : -1)
        // found this line on https://flaviocopes.com/how-to-sort-array-of-objects-by-property-javascript/
        console.log(gardenData)
        gardenData.forEach((element) => {
            let opElem = $(`<option> ${element.name} </option>`)
            $('#dropdown').append(opElem)
        $('#dropdown').on('click', (event) => {
            event.preventDefault()
            

        })    
        })
    })  
    // once populated create event listener for what is clicked on the drop down.
    //also need to add a submit listener if they use search bar
    //add a div container to push all the data pulled from api
    //
})
/* 
list of classes needed to populate
<h3> ${gardenData.name} </h3>
            image_url?
<h4> ${gardenData.description} </h4>
<h4> ${gardenData.optimal_soil} </h4>
<h4> ${gardenData.optimal_sun} </h4>
<h4> ${gardenData.when_to_plant} </h4>
<h4> ${gardenData.planting_considerations} </h4>
<h4> ${gardenData.transplanting} </h4>
<h4> ${gardenData.growing_from_seed} </h4>
<h4> ${gardenData.spacing} </h4>
<h4> ${gardenData.watering} </h4>
<h4> ${gardenData.other_care} </h4>
<h4> ${gardenData.pests} </h4>
<h4> ${gardenData.harvesting} </h4>
<h4> ${gardenData.storage_use} </h4> */
