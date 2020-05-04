const cols = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];
const rows = Array.from(Array(8), (e, i) => i + 1);

let populateSeats = (cols, rows) => {
  let seats = {};
  cols.map((col) => {
    seats[col] = {};
    rows.map((row) => {
      seats[col][row] = { isAvailable: true };
    });
  });

  return seats;
};

function initSeat() {
  if (!localStorage.getItem("seats")) setSeats(populateSeats(cols, rows));
}

function resetSeat() {
  setSeats(populateSeats(cols, rows));
}

function setSeats(seats) {
  localStorage.setItem("seats", JSON.stringify(seats));
}

function getSeats() {
  initSeat();
  return JSON.parse(localStorage.getItem("seats"));
}

function setMovies(movies) {
  localStorage.setItem("movies", JSON.stringify(movies));
}

function getMovies() {
  return localStorage.getItem("movies");
}

function getMovie(id) {
  let movies = JSON.parse(localStorage.getItem("movies"));
  if (movies && movies.length > 0) {
    return movies.find((movie) => movie.id == id);
  }

  return null;
}

function setReservations(reservation) {
  localStorage.setItem("reservations", JSON.stringify(reservation));
}

function _addReservation(reservation) {
  if (!localStorage.getItem("reservations")) setReservations([]);
  let reservations = JSON.parse(localStorage.getItem("reservations"));
  reservations.push(reservation);
  setReservations(reservations);
}

function getReservations() {
  if (!localStorage.getItem("reservations")) setReservations([]);
  return JSON.parse(localStorage.getItem("reservations"));
}

function getReservationsByScheduleId(id) {
  if (!localStorage.getItem("reservations")) {
    setReservations([]);
    return null;
  }

  return JSON.parse(localStorage.getItem("reservations")).filter(
    (re) => re.scheduleInfo.id == id
  );
}

function removeReservations(ix, url) {
  console.log(ix + " is removed!");
  setReservations(getReservations().filter((_, i) => i != ix));
  if (url) {
    window.location.href = url;
  }
}

let schedules_seed = [
  {
    movieID: 0,
    timeRange: "11:00AM - 12:00PM",
    cinema: 1,
    price: 300,
    date: "04-29-2020",
  },
  {
    movieID: 0,
    timeRange: "12:30PM - 01:30PM",
    cinema: 1,
    price: 300,
    date: "04-30-2020",
  },
  {
    movieID: 0,
    timeRange: "02:00PM - 3:00PM",
    cinema: 1,
    price: 250,
    date: "04-30-2020",
  },
  {
    movieID: 1,
    timeRange: "11:00AM - 12:00PM",
    cinema: 2,
    price: 250,
    date: "04-29-2020",
  },
  {
    movieID: 1,
    timeRange: "11:00AM - 12:00PM",
    cinema: 2,
    price: 250,
    date: "04-30-2020",
  },
  {
    movieID: 1,
    timeRange: "11:00AM - 12:00PM",
    cinema: 2,
    price: 250,
    date: "04-31-2020",
  },
  {
    movieID: 2,
    timeRange: "11:00AM - 12:00PM",
    cinema: 3,
    price: 200,
    date: "04-29-2020",
  },
  {
    movieID: 3,
    timeRange: "11:00AM - 12:00PM",
    cinema: 4,
    price: 500,
    date: "04-29-2020",
  },
  {
    movieID: 4,
    timeRange: "11:00AM - 12:00PM",
    cinema: 1,
    price: 250,
    date: "04-29-2020",
  },
  {
    movieID: 5,
    timeRange: "11:00AM - 12:00PM",
    cinema: 2,
    price: 250,
    date: "04-29-2020",
  },
  {
    movieID: 6,
    timeRange: "11:00AM - 12:00PM",
    cinema: 3,
    price: 250,
    date: "04-29-2020",
  },
  {
    movieID: 7,
    timeRange: "11:00AM - 12:00PM",
    cinema: 4,
    price: 250,
    date: "04-29-2020",
  },
  {
    movieID: 8,
    timeRange: "11:00AM - 12:00PM",
    cinema: 1,
    price: 250,
    date: "04-29-2020",
  },
  {
    movieID: 9,
    timeRange: "11:00AM - 12:00PM",
    cinema: 2,
    price: 250,
    date: "04-29-2020",
  },
  {
    movieID: 10,
    timeRange: "11:00AM - 12:00PM",
    cinema: 3,
    price: 250,
    date: "04-29-2020",
  },
  {
    movieID: 11,
    timeRange: "11:00AM - 12:00PM",
    cinema: 4,
    price: 250,
    date: "04-29-2020",
  },
];

schedules_seed.map((schedule, index) => {
  schedule.id = index;
});

function setSchedules(schedules) {
  localStorage.setItem("schedules", JSON.stringify(schedules));
}

function getSchedules() {
  return JSON.parse(localStorage.getItem("schedules"));
}

function getSchedulesByMovieID(movieID) {
  let schedules = getSchedules();
  return schedules.filter((schedule) => schedule.movieID == movieID);
}

function getScheduleByID(id) {
  let schedules = getSchedules();
  return schedules.find((schedule) => schedule.id == id);
}

function initSchedules() {
  let schedules = getSchedules();
  if (!schedules || schedules.length === 0) {
    setSchedules(schedules_seed);
  }
}
initSchedules();
