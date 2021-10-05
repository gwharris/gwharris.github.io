var a = document.getElementById("about");
var b = document.getElementById("project");
var c = document.getElementById("work");
var d = document.getElementById("volunteer");

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

