function getCapTitle(titleToChange) {
	newTitle = '';

	for (i = 0; i < titleToChange.length; i++) {
		thisLetter = titleToChange[i]
		if (i === 0) {
			thisLetter = titleToChange[i].toUpperCase();
		}
		else if (titleToChange[i] === '-') {
			thisLetter = ' ';
		}
		else if (i > 0 && titleToChange[i-1] === '-') {
			thisLetter = titleToChange[i].toUpperCase();
		}
		newTitle += thisLetter;
	}
	
	return newTitle;
}

function checkReq() {
	// Create a request variable and assign a new XMLHttpRequest object to it.
	var request = new XMLHttpRequest();

	// Open a new connection, using the GET request on the URL endpoint
	request.open('GET', 'https://api.github.com/rate_limit', true);

	request.onload = function () {
	    // Begin accessing JSON data here
	    var data = JSON.parse(this.response);

	    const now = new Date();
	    const secondsSinceEpoch = Math.round(now.getTime() / 1000);
	    waitTime = (data.rate.reset - secondsSinceEpoch) / 60;

	    console.log(Math.round((waitTime) * 10) / 10 + ' minute(s) until reset!');

	    console.log(data.rate.remaining);
	}

	// Send request
	request.send();
}

function getStartDate(date) {
	newDate = '';

	for (i = 0; i < date.length; i++) {
		thisLetter = date[i]

		if (date[i] === '-') {
			thisLetter = '/';
		}
		else if (date[i] === 'T') {
			break;
		}
		newDate += thisLetter;
	}
	
	return newDate;
}

function definePage(project_title, project_link, project_desc, project_start_date) {
	$('#project-title').html('<h1 id="projectName">' + project_title + '</h1>');
	$('#project-link').html('<p><a href=' + project_link + '>Project Link</a></p>');
	$('#project-desc').html('<p><b>Description: </b>' + project_desc + '</p>');
	$('#project-date').html('<p>Last updated: ' + project_start_date + '</p>');
}

function createPage(repoName) {
	checkReq()

	var title;
	var link;
	var desc;
	var start_date;

	// Create a request variable and assign a new XMLHttpRequest object to it.
	var request = new XMLHttpRequest();

	// Open a new connection, using the GET request on the URL endpoint
	request.open('GET', 'https://api.github.com/repos/spencerlepine/' + repoName, true);

	request.onload = function () {
	  // Begin accessing JSON data here
	  var data = JSON.parse(this.response);			  

	  title = getCapTitle(data.name);
	  link = data.html_url
	  desc =  data.description
	  start_date = getStartDate(data.updated_at);

	  definePage(title, link, desc, start_date);
	}

	// Send request
	request.send();

	// console.log('0 remaining GitHub API requests :(');
	// var title = 'Title'
	// var link =  '#'
	// var desc = 'Sample description.'
	// var start_date = '12/31/1999'

	$('#projectImg').html("<img id='screenshotImg' src='../images/workinprogress.jpg' alt='Site under construction' style='width: 25%'>");
	

	
}