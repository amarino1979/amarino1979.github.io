const baseURL = `http://harvesthelper.herokuapp.com/api/v1/plants?api_key=3d61aab31f7111f646d7d1985662a0ec`
const api_key = `3d61aab31f7111f646d7d1985662a0ec`
let queryURL = baseURL

console.log(baseURL)

let gardenData = [];

$(() => {

    $.ajax({
        type: 'get',
        url: baseURL
    }).then((dataSet) => {
        //populate a drop down by name by alphabetical order
        gardenData = dataSet.sort((a, b) => (a.name > b.name) ? 1 : -1)
        // found this line on https://flaviocopes.com/how-to-sort-array-of-objects-by-property-javascript/
        // console.log(gardenData)
        gardenData.forEach((element) => {
            let opElem = $(`<option class="plant-name"> ${element.name} </option>`)
            $('#dropdown').append(opElem)
            $('#dropdown').on('click', '.plant-name', (event) => {
                //event.preventDefault()
                console.log("hi");
                const dropdownItem = $('#dropdown').val();
                gardenData.push(element)
                //$(event.currentTarget).trigger('reset');
                //console.log(dropdownItem);
                // once alphabetized create event listener for what is clicked on the drop down.
            })
            
        })
        document.addEventListener('input', function (event) {
            // Only run on our select menu
            if (event.target.id !== 'dropdown') return;
            // The selected value
            console.log(gardenData)
            console.log(event.target.value);
            const selectedVeg = gardenData.find(veg =>  veg.name === event.target.value )
            console.log(selectedVeg.id)
            // The selected option element
            // *********************ajax call inside here *********************
            // const getSelectedPlantData = () => {
                $.ajax({
                    type: 'get',
                    url: `http://harvesthelper.herokuapp.com/api/v1/plants/${selectedVeg.id}?api_key=3d61aab31f7111f646d7d1985662a0ec`
                }).then((data) => {
                    console.log(data)                  
                    $('#container').append(`
                    <h3> ${data.name} </h3>
                    <h4> Description: ${data.description} </h4>
                    <h4> Optimal Soil: ${data.optimal_soil} </h4>
                    <h4> Optimal Sun: ${data.optimal_sun} </h4>
                    <h4> When to plant: ${data.when_to_plant} </h4>
                    <h4> Planting Considerations: ${data.planting_considerations} </h4>
                    <h4> Transplanting: ${data.transplanting} </h4>
                    <h4> Growing from seeds: ${data.growing_from_seed} </h4>
                    <h4> Spacing: ${data.spacing} </h4>
                    <h4> Watering: ${data.watering} </h4>
                    <h4> Other care: ${data.other_care} </h4>
                    <h4> Pests: ${data.pests} </h4>
                    <h4> Harvesting: ${data.harvesting} </h4>
                    <h4> Storage Use: ${data.storage_use} </h4>`) 
            }, (error) => {
                console.log(error)
            })
    //    }
            console.log(event.target.options[event.target.selectedIndex]);
    }, false);
    //console.log('#dropdown')
})
//also need to add a submit listener if they use search bar
//add a div container to push all the data pulled from api
//
// Using the code from the morning exercise from w03d05:
const $openBtn = $('#openModal');
const $modal = $('#modal');
const $submitBtn = $('#submit');

const openModal = () => {
    $modal.css('display', 'block');
}
const closeModal = () => {
    $modal.css('display', 'none');
}
//looking into local storage
$openBtn.on('click', openModal);
$submitBtn.on('click', closeModal);
    //clear out fields
});
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
