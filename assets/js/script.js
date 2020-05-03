//check if script has loaded
console.log("Script is loaded.");
console.log(movie);

var movie = [];

// now showing movies
var movies = [
  {
    title: "Onward",
    director: "Dan Scanlon",
    starring: "Tom Holland, Chris Pratt, Octavia Spencer, Julia Louis-Dreyfus",
    showDate: "04-20-2020",
    time: "8:00 PM",
    cinema: "1",
    price: "100",
    synopsis:
      "Teenage elf brothers Ian and Barley embark on a magical quest to spend one more day with their late father. Like any good adventure, their journey is filled with cryptic maps, impossible obstacles and unimaginable discoveries. But when dear Mom finds out her sons are missing, she teams up with the legendary manticore to bring her beloved boys back home.",
    rating: "8/10",
    image: "../assets/img/movies/onward.webp",
  },
  {
    title: "El Camino: A Breaking Bad Movie",
    director: "Vince Gilligan",
    starring: "Aaron Paul, Jesse Plemons, Charles Baker (II), Jonathan Banks",
    showDate: "04-20-2020",
    time: "8:00 PM",
    cinema: "2",
    price: "100",
    synopsis:
      "El Camino: A Breaking Bad Movie is a 2019 American neo-Western crime thriller film that serves as an epilogue to the television series Breaking Bad. Series creator Vince Gilligan wrote, directed, and produced the film, while Aaron Paul reprised his role as Jesse Pinkman.",
    rating: "8/10",
    image: "../assets/img/movies/camino.jpg",
  },
  {
    title: "Black Widow",
    director: "Cate Shortland",
    starring: "Scarlett Johansson, Florence Pugh, David Harbour, O.T. Fagbenle",
    showDate: "04-20-2020",
    time: "8:00 PM",
    cinema: "3",
    price: "100",
    synopsis:
      "At birth the Black Widow (aka Natasha Romanova) is given to the KGB, which grooms her to become its ultimate operative. When the U.S.S.R. breaks up, the government tries to kill her as the action moves to present-day New York, where she is a freelance operative.",
    rating: "8.5/10",
    image: "../assets/img/movies/blackwidow.jpeg",
  },
  {
    title: "No Time To Die",
    director: "Cary Joji Fukunaga",
    starring: "Daniel Craig, Rami Malek, Lea Seydoux, Lashana Lynch",
    showDate: "04-20-2020",
    time: "8:00 PM",
    cinema: "4",
    price: "100",
    synopsis:
      "Recruited to rescue a kidnapped scientist, globe-trotting spy James Bond finds himself hot on the trail of a mysterious villain, who's armed with a dangerous new technology.",
    rating: "8.5/10",
    image: "../assets/img/movies/notime.jfif",
  },
  {
    title: "A Quiet Place 2",
    director: "John Krasinki",
    starring: "Emily Blunt, Cillian Murphy, Millicent Simmonds, Noah Jupe",
    showDate: "04-20-2020",
    time: "6:00 PM",
    cinema: "1",
    price: "100",
    synopsis:
      "The Abbott family must now face the terrors of the outside world as they fight for survival in silence. Forced to venture into the unknown, they realize that the creatures that hunt by sound are not the only threats that lurk beyond the sand path.",
    rating: "7/10",
    image: "../assets/img/movies/quietplace.webp",
  },
  {
    title: "Artemis Fowl",
    director: "Kenneth Branagh",
    starring: "Ferdia Shaw, Lara McDonell, Josh Gad, Tamara Smart",
    showDate: "04-20-2020",
    time: "6:00 PM",
    cinema: "2",
    price: "100",
    synopsis:
      "Artemis Fowl is a 12-year-old genius and descendant of a long line of criminal masterminds. He soon finds himself in an epic battle against a race of powerful underground fairies who may be behind his father's disappearance.",
    rating: "6/10",
    image: "../assets/img/movies/artemisfowl.jpg",
  },
  {
    title: "Top Gun: Maverick",
    director: "Joseph Kosinki",
    starring: "Tom Cruise, Miles Teller, Jennifer Connelly, Glen Powell",
    showDate: "04-20-2020",
    time: "6:00 PM",
    cinema: "3",
    price: "100",
    synopsis:
      "Pete 'Maverick' Mitchell keeps pushing the envelope after years of service as one of the Navy's top aviators. He must soon confront the past while training a new squad of graduates for a dangerous mission that demands the ultimate sacrifice.",
    rating: "7.5/10",
    image: "../assets/img/movies/topgun.jpeg",
  },
  {
    title: "Bad Boys For Life",
    director: "Bilall Fallah, Adil El Arbi",
    starring: "Will Smith, Martin Lawrence, Vanessa Hudgens, Alexander Ludwig",
    showDate: "04-20-2020",
    time: "6:00 PM",
    cinema: "4",
    price: "100",
    synopsis:
      "The wife and son of a Mexican drug lord embark on a vengeful quest to kill all those involved in his trial and imprisonment -- including Miami Detective Mike Lowrey. When Mike gets wounded, he teams up with partner Marcus Burnett and AMMO -- a special tactical squad -- to bring the culprits to justice. But the old-school, wisecracking cops must soon learn to get along with their new elite counterparts if they are to take down the vicious cartel that threatens their lives.",
    rating: "6.8/10",
    image: "../assets/img/movies/badboys.jpg",
  },
  {
    title: "Bloodshot",
    director: "David S.F. Wilson",
    starring: "Vin Diesel, Sam Heughan, Eiza Gonzales, Toby Kebbell",
    showDate: "04-20-2020",
    time: "2:00 PM",
    cinema: "1",
    price: "100",
    synopsis:
      "After he and his wife are murdered, marine Ray Garrison is resurrected by a team of scientists. Enhanced with nanotechnology, he becomes a superhuman, biotech killing machine - Bloodshot. As Ray first trains with fellow super-soldiers, he cannot recall anything from his former life. But when his memories flood back and he remembers the man that killed both him and his wife, he breaks out of the facility to get revenge, only to discover that there's more to the conspiracy than he thought.",
    rating: "5.7/10",
    image: "../assets/img/movies/bloodshot.jpg",
  },
  {
    title: "Trolls World Tour",
    director: "Walt Dohrn",
    starring: "Anna Kendrick, Justin Timberlake, Rachel Bloom, James Corden",
    showDate: "04-20-2020",
    time: "2:00 PM",
    cinema: "2",
    price: "100",
    synopsis:
      "Poppy and Branch discover that there are six different troll tribes scattered over six different lands. Each tribe is also devoted to six different kinds of music -- funk, country, techno, classical, pop and rock. When rockers Queen Barb and King Thrash set out to destroy the other music, Poppy and Branch embark on a daring mission to unite the trolls and save the diverse melodies from becoming extinct.",
    rating: "6.6/10",
    image: "../assets/img/movies/trolls.jpg",
  },
  {
    title: "Harley Quinn: Birds of Prey",
    director: "Cathy Yan",
    starring:
      "Margot Robbie, Mary Elizabeth Winstead, Rosie Perez, Chris Messina",
    showDate: "04-20-2020",
    time: "2:00 PM",
    cinema: "3",
    price: "100",
    synopsis:
      "It's open season on Harley Quinn when her explosive breakup with the Joker puts a big fat target on her back. Unprotected and on the run, Quinn faces the wrath of narcissistic crime boss Black Mask, his right-hand man, Victor Zsasz, and every other thug in the city. But things soon even out for Harley when she becomes unexpected allies with three deadly women -- Huntress, Black Canary and Renee Montoya.",
    rating: "6.2/10",
    image: "../assets/img/movies/harleyquinn.jpg",
  },
  {
    title: "Dolittle",
    director: "Cate Shortland",
    starring: "Robert Downy Jr., Harry Collet, Antonio Banderas, Michael Sheen",
    showDate: "04-20-2020",
    time: "2:00 PM",
    cinema: "4",
    price: "100",
    synopsis:
      "Dr. John Dolittle lives in solitude behind the high walls of his lush manor in 19th-century England. His only companionship comes from an array of exotic animals that he speaks to on a daily basis. But when young Queen Victoria becomes gravely ill, the eccentric doctor and his furry friends embark on an epic adventure to a mythical island to find the cure.",
    rating: "5.8/10",
    image: "../assets/img/movies/dolittle.jpg",
  },
];

setMovies(movies);

if (document.getElementById("nowshowing") != null) {
  for (var i = 0; i < movies.length; i++) {
    document.getElementById("nowshowing").innerHTML +=
      '<div class="col-lg-4 col-md-6 portfolio-item ' +
      movies[i].cinema +
      '">' +
      "<a onclick=\"showMovie('" +
      movies[i].title +
      '\')" class="details-link" data-toggle="modal" data-target="#myModal2">' +
      '<img src="' +
      movies[i].image +
      '" class="img-fluid box" alt="' +
      movies[i].title +
      '"> </a> ' +
      '<div class="portfolio-info">' +
      "<h4>" +
      movies[i].title +
      "</h4>" +
      "<p> Directed by: " +
      movies[i].director +
      "<p> Starring: " +
      movies[i].starring +
      "</p>" +
      "</div>" +
      "</div>";
  }
}
// href=\"movie-details.html\"
function showMovie(title) {
  console.log("Movie selected!" + title);

  for (var i = 0; i < movies.length; i++) {
    if (title === movies[i].title) {
      var movie = {
        title: movies[i].title,
        director: movies[i].director,
        starring: movies[i].starring,
        showDate: movies[i].showDate,
        time: movies[i].time,
        cinema: movies[i].cinema,
        price: movies[i].price,
        synopsis: movies[i].synopsis,
        rating: movies[i].rating,
        image: movies[i].image,
      };

      console.log(movie);

      document.getElementById("showingdetails").innerHTML =
        '<div class="modal fade" id="myModal2" role="dialog">' +
        '<div class="modal-dialog">' +
        '<div class="modal-content">' +
        '<div class="modal-header">' +
        '<h4 class="modal-title" id="movieTitle" value="' +
        movie.title +
        '">' +
        movie.title +
        "</h4>" +
        '<button type="button" class="close" data-dismiss="modal">&times;</button>' +
        "</div>" +
        '<div class="modal-body">' +
        "<p>" +
        "<strong>Directed by</strong>: " +
        movie.director +
        "<br>" +
        "<strong>Starring</strong>: " +
        movie.starring +
        "<br>" +
        "<strong>Date</strong>: " +
        movie.showDate +
        "<br>" +
        "<strong>Time</strong>: " +
        movie.time +
        "<br>" +
        "<strong>Synopsis</strong>: " +
        movie.synopsis +
        "<br>" +
        "<strong>Rating</strong>: " +
        movie.rating +
        "<br>" +
        "</p>" +
        "</div>" +
        '<div class="modal-footer">' +
        '<a href="seat-selection.html?index=' +
        i +
        '" onclick="selectMovie(\'' +
        movie +
        "')\">" +
        '<button class="confirm-btn vertical-center" id="thisMovie(\'' +
        movie.title +
        "')\">" +
        "Proceed</button>" +
        "</a>" +
        '<button type="button" class="confirm-btn" data-dismiss="modal">Close</button>' +
        "</div>" +
        "</div>" +
        "</div>" +
        "</div>";
    }
  }

  // seat-selection.html
  // document.getElementById("selectedMovieImage").innerHTML = "<img src=\"" + movie.image + "\">";

  // document.getElementById("selectedMovieDetails").innerHTML = "<h2>Onwards</h2> "+
  // 																	"<ul>" +
  // 																		"<li><strong>Directed by</strong>:" + movie.director + "</li>" +
  // 																		"<li><strong>Starring</strong>:" + movie.starring + "</li>" +
  // 																		"<li><strong>Date</strong>:" + movie.showDate + "</li>" +
  // 																		"<li><strong>Time</strong>:" + movie.time + "</li>" +
  // 																		"<li><strong>Synopsis</strong>:" + movie.synopsis + "</li>" +
  // 																		"<li><strong>Rating</strong>:" + movie.rating + "</li>" +
  // 																	"</ul>" +

  // 																	"<a href=\"seat-selection.html\">" +
  // 																		"<button class=\"confirm-btn vertical-center\" id=\"thisMovie('" + movie.title + "')\">" +
  // 																			"Proceed to Seat Selection </button>" +
  // 																	"</a>";
}

function getUrlVars() {
  var vars = {};
  var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (
    m,
    key,
    value
  ) {
    vars[key] = value;
  });
  return vars;
}

// next picture data
var nextpicture = [
  {
    title: "Sonic the Hedgehog",
    director: "Jeff Fowler",
    starring:
      "James Marsden, Ben Schwartz, Jim Carrey, Tika Sumpter, Neal McDonough",
    showDate: "05-12-2020",
    image: "assets/img/coming/sonic.jpg",
  },
  {
    title: "The Eternals",
    director: "Chloé Zhao",
    starring:
      "Kit Harrington, Kumail Nanjiani, Richard Madden, Angelina Jolie, Ma Dong-Seok",
    showDate: "05-12-2020",
    image: "assets/img/coming/eternals.jpg",
  },
  {
    title: "Halloween Kills",
    director: "David Gordon Green",
    starring:
      "Jamie Lee Curtis, Kyle Rihards, Anthony Michael Hall, James Jude Courtney, Judy Greer",
    showDate: "05-12-2020",
    image: "assets/img/coming/halloweenkills.jpg",
  },
  {
    title: "SCOOB!",
    director: "Tony Cervone",
    starring:
      "Zack Efron, Gina Rodriguez, Mark Wahlberg, Will Forte, Amanda Seyfried",
    showDate: "05-12-2020",
    image: "assets/img/coming/scoob.jpg",
  },
];

if (document.getElementById("soon") != null) {
  for (var i = 0; i < nextpicture.length; i++) {
    document.getElementById("soon").innerHTML +=
      '<div class="col-lg-3 col-md-6"> ' +
      '<div class="icon-box"> ' +
      '<img src="' +
      nextpicture[i].image +
      '" class="img-fluid" alt="' +
      nextpicture[i].title +
      '"> ' +
      '<div class="withpadding">' +
      '<h5 class="title">' +
      nextpicture[i].title +
      "</h5> " +
      '<p class="description"> Directed by: ' +
      nextpicture[i].director +
      "<br> Starring: " +
      nextpicture[i].starring +
      "<br> Opening on: " +
      nextpicture[i].showDate +
      "</p>" +
      "</div>" +
      "</div>" +
      "</div>";
  }
}

function selectMovie(movie) {
  console.log("Movie: " + movie + " is stored to reservations.");
  return movie;
}

// document.getElementById("ticketinfo").innerHTML +=

// for reservation
var reservations = [];

if (!localStorage.getItem("reserve")) {
  localStorage.setItem("reserve", JSON.stringify(reservations));
}

var reservation = JSON.parse(localStorage.getItem("reserve"));
var table = document.getElementById("reservationTable");

for (var i = 0; i < reservation.length; i++) {
  table.innerHTML +=
    "<tr>" +
    "<td>" +
    '<div class="social-links text-center text-md-right pt-3 pt-md-0">' +
    '<a href="checkout.html" class="linkedin"><i class="icofont-look"></i></a> ' +
    '<a href="#" class="linkedin"><i class="icofont-ui-delete"></i></a> ' +
    "</div></td> " +
    "<td>" +
    reservation[i].id +
    "</td>" +
    "<td>" +
    reservation[i].dateBooked +
    "</td>" +
    "<td>" +
    reservation[i].movie +
    "</td>" +
    "<td>" +
    reservation[i].cinema +
    "</td>" +
    "<td>" +
    reservation[i].time +
    "</td>" +
    "<td>" +
    reservation[i].ticket +
    "</td>" +
    "<td>" +
    reservation[i].seatNumber +
    "</td>" +
    "<td>" +
    reservation[i].status +
    "</td>";

  ("</tr>");
}
var smove = JSON.parse(localStorage.getItem("reserve"));
localStorage.setItem("reserve", JSON.stringify(smove));

function addReservation() {
  var reservations = {
    id: ++reservations.length,
    movie: document.getElementById("movieTitle").value,
  };

  var smove = JSON.parse(localStorage.getItem("reserve"));
  smove.push(reservations);
  localStorage.setItem("reserve", JSON.stringify(smove));
  location.reload();
}
