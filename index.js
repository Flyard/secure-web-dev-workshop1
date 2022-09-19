// Invoking strict mode https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode#invoking_strict_mode
'use strict'

// https://opendata.paris.fr/explore/dataset/lieux-de-tournage-a-paris/information
const filmingLocations = require('./lieux-de-tournage-a-paris.json')

console.log('🚀 It Works!');
const e1 = getFilmingLocationsNumber();
const e2 = sortFilmingLocationsByStartDate();
//console.log(getFilmingLocationsNumber2020());

/**
 * 💅 Try to produce the most readable code, use meaningful variable names
 * Your intentions should be clear by just reading the code
 * Good luck, have fun !
 */

// 📝 TODO: Number of filming locations
// 1. Make the function return the number of filming locations
function getFilmingLocationsNumber () {
	return filmingLocations.length
}
console.log(`There is ${getFilmingLocationsNumber()} filming locations in Paris`)

// 📝 TODO: Filming locations sorted by start date, from most recent to oldest.
// 1. Implement the function
// 2. Log the first and last item in array
function sortFilmingLocationsByStartDate () {
	
	return 
}
//console.log(sortFilmingLocationsByStartDate())

// 📝 TODO: Number of filming locations in 2020 only
// 1. Make the function return the number of filming locations in 2020 only
// 2. Log the result
function getFilmingLocationsNumber2020 () {
	let count = 0;
	
	for(let i = 0; i < filmingLocations.length; i++){
		if(filmingLocations[i].fields.annee_tournage == "2020"){
			count++;
		}
	}
	return count;
}
console.log('Ex1: '+getFilmingLocationsNumber2020());

function getFilmLocationNumber(){

		
}


// 📝 TODO: Number of filming locations per year
// 1. Implement the function, the expected result is an object with years as
// keys and filming locations number as value, e.g:
//    const filmingLocationsPerYear = {
//      '2020': 1234,
//      '2021': 1234,
//    }
// 2. Log the result
function getFilmingLocationsNumberPerYear () {
	let count = 0;
	let tab = [];
	const years_ = ["2016", "2017", "2018", "2019", "2020", "2021"];

	for(let i = 0; i <years_.length; i++){
		for(let j = 0; j < filmingLocations.length; j++){
			if(filmingLocations[j].fields.annee_tournage == years_[i]){
				count++;
			}
		}
		tab[i] = count;
		count = 0;
	}

	let filmingLocationsPerYear = {
		'2016' : tab[0],
		'2017' : tab[1],
		'2018' : tab[2],
		'2019' : tab[3],
		'2020' : tab[4],
		'2021' : tab[5]
	}

	return filmingLocationsPerYear
}
function displayFilmingLocationsPerYear(){
	for(const[key, value] of Object.entries(getFilmingLocationsNumberPerYear())){
		console.log(`${key} : ${value}`+' movies');
	}
}
console.log('Ex3: ')
displayFilmingLocationsPerYear();


// 📝 TODO: Number of filming locations by district (arrondissement)
// 1. Implement the function, the expected result is an object with
// district as keys and filming locations number as value, e.g:
//    const filmingLocationsPerDistrict = {
//      '75013': 1234,
//      '75014': 1234,
//    }
// 2. Log the result
function getFilmingLocationsNumberPerDistrict () {
	let count = 0;
	let temp = [];
	let arrondissementTab = [
		'75001', '75002','75003', '75004',
		'75005', '75006','75007', '75008',
		'75009', '75010','75011', '75012',
		'75013', '75014','75015', '75016',
		'75017', '75018','75019', '75020'
	];

	for(let i = 0; i < arrondissementTab.length; i++){
		for(let j = 0; j < filmingLocations.length; j++){
			if(filmingLocations[j].fields.ardt_lieu == arrondissementTab[i]){
				count++;
			}
		}
		temp[i] = count;
		count = 0;
	}

	let filmingLocationsPerDistrict = {
		'75001' : temp[0], '75002' : temp[1], '75003' : temp[2], '75004' : temp[3],
		'75005' : temp[4], '75006' : temp[5], '75007' : temp[6], '75008' : temp[7],
		'75009' : temp[8], '75010' : temp[9], '75011' : temp[10], '75012' : temp[11],
		'75013' : temp[12], '75014' : temp[13], '75015' : temp[14], '75016' : temp[15],
		'75017' : temp[16], '75018' : temp[17], '75019' : temp[18], '75020' : temp[19],
	}

	return filmingLocationsPerDistrict;
}
function displayFilmingLocationsPerDistrict() {
	for(const[key, value] of Object.entries(getFilmingLocationsNumberPerDistrict())){
		console.log(`${key} : ${value}`+' movies');
	}
}
console.log()
displayFilmingLocationsPerDistrict();

// 📝 TODO: Number of locations per film, sorted in descending order
// 1. Implement the function, result expected as an array of object like:
//    const result = [{film: 'LRDM - Patriot season 2', locations: 12}, {...}]
// 2. Log the first and last item of the array
function getFilmLocationsByFilm () {

	let tab = [];
	let tab2 = [];

	for(let i  = 0; i < filmingLocations.length; i++){
		tab[i] = filmingLocations[i].fields.nom_tournage;
		if(!tab.includes(filmingLocations[i].fields.nom_tournage)){
			tab2.push(filmingLocations[i].fields.nom_tournage);
			console.log('dedans')
		}
	}
	//return tab2;
}

getFilmLocationsByFilm();

function displayFilmLocationByFilm() {
	for(const[key, value] of Object.entries(getFilmLocationsByFilm())){
		console.log(`${key} : ${value}`+' movies');
	}
}
//displayFilmLocationByFilm();
console.log()

// 📝 TODO: Number of different films
// 1. Implement the function
// 2. Log the result
function getNumberOfFilms() {
	return ''  //let i = [][]
}

// 📝 TODO: All the filming locations of `LRDM - Patriot season 2`
// 1. Return an array with all filming locations of LRDM - Patriot season 2
// 2. Log the result
function getArseneFilmingLocations () {
	return []
}

// 📝 TODO: Tous les arrondissement des lieux de tournage de nos films favoris
//  (favoriteFilms)
// 1. Return an array of all the districts of each favorite films given as a
//    parameter. e.g. :
//    const films = { 'LRDM - Patriot season 2': ['75013'] }
// 2. Log the result
function getFavoriteFilmsLocations (favoriteFilmsNames) {
	return []
}
const favoriteFilms =
	[
		'LRDM - Patriot season 2',
		'Alice NEVERS',
		'Emily in Paris',
	]

// 📝 TODO: All filming locations for each film
//     e.g. :
//     const films = {
//        'LRDM - Patriot season 2': [{...}],
//        'Une jeune fille qui va bien': [{...}]
//     }
function getFilmingLocationsPerFilm () {
	return { }
}

// 📝 TODO: Count each type of film (Long métrage, Série TV, etc...)
// 1. Implement the function
// 2. Log the result
function countFilmingTypes () {
	return {}
}

// 📝 TODO: Sort each type of filming by count, from highest to lowest
// 1. Implement the function. It should return a sorted array of objects like:
//    [{type: 'Long métrage', count: 1234}, {...}]
// 2. Log the result
function sortedCountFilmingTypes () {
	return []
}

/**
 * This arrow functions takes a duration in milliseconds and returns a
 * human-readable string of the duration
 * @param ms
 * @returns string
 */
const duration = (ms) => `${(ms/(1000*60*60*24)).toFixed(0)} days, ${((ms/(1000*60*60))%24).toFixed(0)} hours and ${((ms/(1000*60))%60).toFixed(0)} minutes`

// 📝 TODO: Find the filming location with the longest duration
// 1. Implement the function
// 2. Log the filming location, and its computed duration

// 📝 TODO: Compute the average filming duration
// 1. Implement the function
// 2. Log the result
