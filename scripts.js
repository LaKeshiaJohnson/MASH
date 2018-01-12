console.log("scripts.js");

let fortune = document.getElementById("fortune");

let submitBtn = document.getElementById("submit");

let location1 = document.getElementById("location1");
let location2 = document.getElementById("location2");
let location3 = document.getElementById("location3");

let job1 = document.getElementById("job1");
let job2 = document.getElementById("job2");
let job3 = document.getElementById("job3");

let pet1 = document.getElementById("pet1");
let pet2 = document.getElementById("pet2");
let pet3 = document.getElementById("pet3");

let locations = [];
let jobs = [];
let pets = [];
let mash = ['mansion', 'apartment', 'shack', 'house'];


let randomNum = (Math.floor(Math.random() * 4));
//console.log("random num between 0 - 3", randomNum);
//console.log("mash", mash[randomNum]);
dwelling = mash[randomNum];

let random2 = (Math.floor(Math.random() * 3));
//location = locations[randomNum];
//console.log("rand location", location);
//job = jobs[randomNum];
//pet = pets[randomNum];

submitBtn.addEventListener("click", submit);

function submit () {
	l1 = location1.value;
	l2 = location2.value;
	l3 = location3.value;
	locations.push(l1, l2, l3);

	j1 = job1.value;
	j2 = job2.value;
	j3 = job3.value;
	jobs.push(j1, j2, j3);

	p1 = pet1.value;
	p2 = pet2.value;
	p3 = pet3.value;
	pets.push(p1, p2, p3);

	console.log("locations: ", locations);
	console.log("pets: ", pets);
	console.log("jobs: ", jobs);

fortune.innerHTML = `<p>You will live in a <b>${dwelling}</b>, located in <b>${locations[random2]}</b>. You will be a <b>${jobs[random2]}</b> who owns a <b>${pets[random2]}</b>.</p>`;
};

