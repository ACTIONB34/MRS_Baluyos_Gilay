const cols = ["A", "B", "C", "D", "F", "G", "H", "I"];
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

function getMovie(index) {
	return JSON.parse(localStorage.getItem("movies"))[index];
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

function removeReservations(ix, url) {
	console.log(ix+ " is removed!");
	setReservations(getReservations().filter((_, i) => i != ix));
	if (url) {
		window.location.href = url;
	}
}
