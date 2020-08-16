var screenshotIndex = 0;
var screenshotList = [];

screenshotList = document.getElementsByClassName('proj-screenshot');

if (screenshotList.length === 0) {
	window.alert('No screenshots available yet..');
} else {
	screenshotList[screenshotIndex].style.display = 'block';
}

function forwardScroll() {
	screenshotList[screenshotIndex].style.display = 'none';
	if (screenshotIndex === screenshotList.length-1) {
		screenshotIndex = 0;
	}
	else {
		screenshotIndex += 1
	}

	screenshotList[screenshotIndex].style.display = 'block';
}

function backwardsScroll() {
	screenshotList[screenshotIndex].style.display = 'none';
	if (screenshotIndex === 0) {
		screenshotIndex = screenshotList.length-1;
	}
	else {
		screenshotIndex -= 1
	}
	screenshotList[screenshotIndex].style.display = 'block';
}