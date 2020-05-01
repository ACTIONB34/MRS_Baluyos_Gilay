//check if script has loaded
console.log("Script is loaded.");

// now showing movies
var movies = [
	{
		title: 		"Onward",
		director: 	"Dan Scanlon",
		starring: 	"Tom Holland, Chris Pratt, Octavia Spencer, Julia Louis-Dreyfus",
		showDate: 	"04-20-2020",
		time: 		"8:00 PM",
		cinema: 	"1",
		price: 		"100",
		synopsis: 	"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
		rating: 	"8/10",
		image: 		"../assets/img/movies/onward.webp"
	},
	{
		title: 		"El Camino: A Breaking Bad Movie",
		director: 	"Vince Gilligan",
		starring: 	"Aaron Paul, Jesse Plemons, Charles Baker (II), Jonathan Banks",
		showDate: 	"04-20-2020",		
		time: 		"8:00 PM",
		cinema: 	"2",
		price: 		"100",
		synopsis: 	"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		rating: 	"8/10",
		image: 		"../assets/img/movies/camino.jpg"
	},
	{
		title: 		"Onward",
		director: 	"Dan Scanlon",
		starring: 	"Tom Holland, Chris Pratt, Octavia Spencer, Julia Louis-Dreyfus",
		showDate: 	"04-20-2020",
		time: 		"8:00 PM",
		cinema: 	"3",
		price: 		"100",
		synopsis: 	"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
		rating: 	"8/10",
		image: 		"../assets/img/movies/onward.webp"
	},
	{
		title: 		"El Camino: A Breaking Bad Movie",
		director: 	"Vince Gilligan",
		starring: 	"Aaron Paul, Jesse Plemons, Charles Baker (II), Jonathan Banks",
		showDate: 	"04-20-2020",
		time: 		"8:00 PM",
		cinema: 	"4",
		price: 		"100",
		synopsis: 	"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		rating: 	"8/10",
		image: 		"../assets/img/movies/camino.jpg"
	}

];

if(document.getElementById("nowshowing") != null){
	for (var i = 0;i < movies.length; i++) {
		document.getElementById("nowshowing").innerHTML +=	"<div class=\"col-lg-4 col-md-6 portfolio-item " + movies[i].cinema + "\">" +
																"<a onclick=\"selectMovie('" + movies[i].title + "')\" class=\"details-link\" title=\"Reserve\">" +
																	"<img src=\"" + movies[i].image + "\" class=\"img-fluid box\" alt=\"" + movies[i].title + "\"> </a> " +
																"<div class=\"portfolio-info\">" +
																	"<h4>" + movies[i].title+ "</h4>" +
																"</div>" +
															"</div>"
	};
}

function selectMovie(title, director, date, time, synopsis) {
	console.log("Movie selected!" + title);

	for (var i = 0;i < movies.length; i++) {
		if( title === movies[i].title) {
			document.getElementById("movie").innerHTML ="<h4>Movie Details</h4>" +
														"Movie Selected: <strong>" + movies[i].title + "</strong><br>" +
														"Director: <strong>" + movies[i].director + "</strong> <br>" +
														"Starring: <strong>" + movies[i].starring + "</strong> <br>" +
														"Date: <strong>" + movies[i].showDate + "</strong> <br>" +
														"Time: <strong>" + movies[i].time + "</strong> <br>" +
														"Synopsis: <strong>" + movies[i].synopsis + "</strong> <br><br>" +
															
														"<a href=\"seat-selection.html\">" +
															"<button class=\"confirm-btn vertical-center\" id=\"thisMovie('" + movies[i].title + "')\">" +
																"Proceed to Seat Selection </button>" +
														"</a>";
		}
	}

}

// next picture data
var nextpicture = [
	{
		title: 		"Sonic the Hedgehog",
		director: 	"Jeff Fowler",
		starring: 	"James Marsden, Ben Schwartz, Jim Carrey, Tika Sumpter, Neal McDonough",
		showDate: 	"05-12-2020",
		image: 		"assets/img/coming/sonic.jpg"
	},
	{
		title: 		"Sonic the Hedgehog",
		director: 	"Jeff Fowler",
		starring: 	"James Marsden, Ben Schwartz, Jim Carrey, Tika Sumpter, Neal McDonough",
		showDate: 	"05-12-2020",
		image: 		"assets/img/coming/sonic.jpg"
	},
	{
		title: 		"Sonic the Hedgehog",
		director: 	"Jeff Fowler",
		starring: 	"James Marsden, Ben Schwartz, Jim Carrey, Tika Sumpter, Neal McDonough",
		showDate: 	"05-12-2020",
		image: 		"assets/img/coming/sonic.jpg"
	},
	{
		title: 		"Sonic the Hedgehog",
		director: 	"Jeff Fowler",
		starring: 	"James Marsden, Ben Schwartz, Jim Carrey, Tika Sumpter, Neal McDonough",
		showDate: 	"05-12-2020",
		image: 		"assets/img/coming/sonic.jpg"
	}

];

if(document.getElementById("soon") != null){
	for (var i = 0;i < nextpicture.length; i++) {
		document.getElementById("soon").innerHTML += "<div class=\"col-lg-3 col-md-6\"> " +
														"<div class=\"icon-box\"> " +
															"<img src=\"" + nextpicture[i].image + "\" class=\"img-fluid\" alt=\"" + nextpicture[i].title + "\"> " +
															"<div class=\"withpadding\">" +
																"<h5 class=\"title\">" + nextpicture[i].title + "</h5> " +
																"<p class=\"description\"> Directed by: " + nextpicture[i].director +
																"<br> Starring: " + nextpicture[i].starring +
																"<br> Opening on: " + nextpicture[i].showDate + "</p>" +
															"</div>" +
														"</div>" +
													"</div>"
	};
}

// for reservation
// var reservations = [];

// if(!localStorage.getItem("reserve")){
// 		localStorage.setItem("reserve",JSON.stringify(reservations));
// 	}

// var reservation = JSON.parse(localStorage.getItem("reserve"));
// var table = document.getElementById("reservationTable");

// 	for (var i = 0;i < reservation.length; i++) {
// 		table.innerHTML += 
// 					"<tr>" +
// 						"<td>" +
// 							"<div class=\"social-links text-center text-md-right pt-3 pt-md-0\">" +
// 								"<a href=\"checkout.html\" class=\"linkedin\"><i class=\"icofont-look\"></i></a> " +									
// 								"<a href=\"#\" class=\"linkedin\"><i class=\"icofont-ui-delete\"></i></a> "+
// 							"</div></td> " +
// 						"<td>" + reservation[i].id + "<\/td>" +
// 						"<td>" + reservation[i].dateBooked + "<\/td>" +
// 						"<td>" + reservation[i].movie + "<\/td>" +
// 						"<td>" + reservation[i].cinema + "<\/td>" +
// 						"<td>" + reservation[i].time + "<\/td>" +
// 						"<td>" + reservation[i].ticket + "<\/td>" +
// 						"<td>" + reservation[i].seatNumber + "<\/td>" +
// 						"<td>" + reservation[i].status + "<\/td>" 
							
// 						"</tr>"
// 	}
// var smove =  JSON.parse(localStorage.getItem("reserve"));
// localStorage.setItem("reserve",JSON.stringify(smove));

// function addReservation(){

// 	var reservations =
// 		{
// 			id: ++(reservations.length),
// 			dateBooked: document.getElementById("thisMovie").value,
// 			movie: document.getElementById().value,
// 			cinema: document.getElementById().value,
// 			time: document.getElementById().value,
// 			ticket: document.getElementById().value,
// 			seatNumber: document.getElementById().value,
// 			status: document.getElementById().value
// 		};


// }