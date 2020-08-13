var hexagons = document.getElementsByClassName("hexagon");

function makeBig(num) {
	if (hexagons[num].classList.contains("regular") > 0) {
		hexagons[num].classList.remove("regular");
	}

	if (hexagons[num].classList.contains("zoom") == 0) {
		hexagons[num].classList.add("zoom");
	}
}

function makeSmall(num) {
	if (hexagons[num].classList.contains("zoom") > 0) {
		hexagons[num].classList.remove("zoom");
	}

	if (hexagons[num].classList.contains("regular") == 0) {
		hexagons[num].classList.add("regular");
	}
	
}