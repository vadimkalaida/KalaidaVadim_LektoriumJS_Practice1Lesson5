
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

let randomDatesArr = [],
	date1 = new Date(1970, 1, 1);
	date2 = new Date();

function randomDate(from, to) {
	for(let i = 0; i < 10; i++) {
		let randomDateNumber = new Date(from.getTime() + Math.random() * (to.getTime() - from.getTime()));
		randomDatesArr.push(randomDateNumber) * Math.floor();
	}
	localStorage.setItem('Dates', JSON.stringify(randomDatesArr));
}

function sortDates(arr) {
	arr.sort(function(a,b) {
		return a - b;
	});
	localStorage.setItem('Sorted Dates', JSON.stringify(randomDatesArr));
}