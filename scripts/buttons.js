var a = document.getElementById("aboutMe");
var b = document.getElementById("workExp");
var c = document.getElementById("school");
var d = document.getElementById("certifications");
var e = document.getElementById("linksAndDocs");
var f = document.getElementById("title");

var arr = [a,b,c,d,e,f];

var index = 0;

function loop(index) {
	for (i=0; i<arr.length;i++) {
		if (i == (index)) {
			arr[i].style.display = "block";
		}
		else {
			arr[i].style.display = "none";
		}
	}
}

// Main section button displays
function aboutMe() {
	loop(0);
}

function workExp() {
	loop(1);
}

function school() {
	loop(2);
}

function certifications() {
	loop(3);
}

function linksAndDocs() {
	loop(4);
}

// Not in use
function title() {
	loop(5);
}

