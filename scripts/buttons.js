// Import statements
var a = document.getElementById("aboutMe");
var b = document.getElementById("workExp");
var c = document.getElementById("school");
var d = document.getElementById("certifications");
var e = document.getElementById("linksAndDocs");


function aboutMe() {
	if (a.style.display === "none") {
		a.style.display = "block";
		b.style.display = "none";
		c.style.display = "none";
		d.style.display = "none";
		e.style.display = "none";
	} 
}

function workExp() {
	if (b.style.display === "none") {
		a.style.display = "none";
		b.style.display = "block";
		c.style.display = "none";
		d.style.display = "none";
		e.style.display = "none";
	} 
}

function school() {
	if (c.style.display === "none") {
		a.style.display = "none";
		b.style.display = "none";
		c.style.display = "block";
		d.style.display = "none";
		e.style.display = "none";
	} 
}

function certifications() {
	if (d.style.display === "none") {
		a.style.display = "none";
		b.style.display = "none";
		c.style.display = "none";
		d.style.display = "block";
		e.style.display = "none";
	} 
}

function linksAndDocs() {
	if (e.style.display === "none") {
		a.style.display = "none";
		b.style.display = "none";
		c.style.display = "none";
		d.style.display = "none";
		e.style.display = "block";
	} 
}

