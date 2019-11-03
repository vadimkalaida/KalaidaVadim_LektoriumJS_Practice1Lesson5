
//MENU

let myMenu = document.querySelector('.menu'),
	openBtn = document.querySelector('.openbtn'),
	openBtnIcon = document.querySelector('#openBtnIcon'),
	openMenuNumber = 0;

function openMenuFunc() {
	myMenu.classList.toggle('active');
	openBtn.classList.toggle('active');
}

function openMenuIconFunc() {
	if(openMenuNumber === 0) {
		openBtnIcon.className = 'fa fa-times-circle-o';
		openMenuNumber = 1;
	} else if(openMenuNumber === 1) {
		openBtnIcon.className = 'fa fa-bars';
		openMenuNumber = 0;
	}
}

// RANDOM DATES

let randomDatesArr = new Array(10),
	indexes = [...Array(10).keys()],
	date1 = new Date(1970, 1, 1);
date2 = new Date();

function shuffle(arr) {
	for(let i = arr.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[arr[i], arr[j]] = [arr[j], arr[i]];
	}
	return arr;
}

indexes = shuffle(indexes);
console.log('indexes', indexes);

function randomDate(arr, from, to) {
	for(let i = 0; i < 10; i++) {
		let randomDateNumber = new Date(from.getTime() + Math.random() * (to.getTime() - from.getTime()));
		arr[[indexes[i]]] = randomDateNumber;
	}
	localStorage.setItem('Dates', JSON.stringify(arr));
	console.log('Dates', randomDatesArr);
}

randomDate(randomDatesArr, date1, date2);
sortDates(randomDatesArr);

function sortDates(arr) {
	arr.sort(function(a,b) {
		return a - b;
	});
	localStorage.setItem('Sorted Dates', JSON.stringify(randomDatesArr));
	console.log('Sorted Dates', randomDatesArr);
}