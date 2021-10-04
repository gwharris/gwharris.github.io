var a = document.getElementById("aboutMe");
var b = document.getElementById("workExp");
var c = document.getElementById("school");
var d = document.getElementById("projects");

var arr = [a,b,c,d];

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
function press(x) {
	loop(x);
}

