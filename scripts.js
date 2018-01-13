console.log("scripts.js");

//variables for divs, buttons, and inputs
let fortune = document.getElementById("fortune");

let submitBtn = document.getElementById("submit");
let resetBtn = document.getElementById("reset");

let location1 = document.getElementById("location1");
let location2 = document.getElementById("location2");
let location3 = document.getElementById("location3");

let job1 = document.getElementById("job1");
let job2 = document.getElementById("job2");
let job3 = document.getElementById("job3");

let pet1 = document.getElementById("pet1");
let pet2 = document.getElementById("pet2");
let pet3 = document.getElementById("pet3");

//holding inputs
let locations = [];
let jobs = [];
let pets = [];
let mash = ['mansion', 'apartment', 'shack', 'house'];

//random num between 0 - 2. For location, job, pet selection.
let randomNum2 = (Math.floor(Math.random() * 3));
//location = locations[randomNum];
//console.log("rand location", location);

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

	//generate random num between 0 - 3. For mash selection.
	//inside function so that this will run everty time the submit button is pressed
	let randomNum = (Math.floor(Math.random() * 4));
	let dwelling = mash[randomNum];

	//console.log("random num between 0 - 3", randomNum);
	//console.log("mash", mash[randomNum]);
	

	fortune.innerHTML = `<p>You will live in a <b>${dwelling}</b>, located in <b>${locations[randomNum2]}</b>. You will be a <b>${jobs[randomNum2]}</b> who owns a <b>${pets[randomNum2]}</b>.</p>`;
};

resetBtn.addEventListener("click", reset);

function reset () {
	location1.value = "";
	location2.value = "";
	location3.value = "";

	job1.value = "";
	job2.value = "";
	job3.value = "";

	pet1.value = "";
	pet2.value = "";
	pet3.value = "";

	locations = [];
	jobs = [];
	pets = [];
	fortune.innerHTML = "";
};
