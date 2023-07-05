var a = document.getElementById("about");
var b = document.getElementById("project");
var c = document.getElementById("volunteer");

var arr = [a,b,c];

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

