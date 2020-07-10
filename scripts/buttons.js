// Import button variables
var a = document.getElementById("aboutMe");
var b = document.getElementById("workExp");
var c = document.getElementById("school");
var d = document.getElementById("certifications");
var e = document.getElementById("linksAndDocs");
// Email variable
var f = document.getElementById("email");

// Main section button displays
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

// Controls the email display
function email() {
	if (f.style.display === "none") {
		f.style.display = "block";
	}
	else {
		f.style.display = "none";
	}
}

