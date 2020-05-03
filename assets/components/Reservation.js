class Reservation {
  constructor(movie, seats, seatsSelected) {
    this.init();
    this._movie = movie;
    this._seats = seats;
    this._seatsSelected = seatsSelected;
  }

  init() {
    this._seats = populateSeats(cols, rows);
  }

  setSeatAvailability(col, row, flag) {
    if (this._seats[col] && this._seats[col][row]) {
      this._seats[col][row].isAvailable = flag;
    }
    if (!flag) {
      this.setSelectedSeats(col + row);
    }

    if (flag) {
      this._seatsSelected = this.removeSelectedSeat(col + row);
    }
  }

  removeSelectedSeat(seat) {
    return this._seatsSelected.filter((s) => s !== seat);
  }

  getSelectedSeats() {
    return this._seatsSelected;
  }

  setSelectedSeats(seat) {
    this._seatsSelected.push(seat);
  }

  getSeats() {
    return this._seats;
  }

  isSeatAvailable(col, row) {
    return this._seats[col][row].isAvailable;
  }

  get movie() {
    return this._movie;
  }

  set movie(movie) {
    this._movie = movie;
  }
}
