function populateViewSeats(seats) {
  let table = "";
  Object.keys(seats).map((col, index) => {
    table += "<tr>";
    table += '<td class="seats">' + col + "</td>";
    Object.keys(seats[col]).map((row, index) => {
      table += "<td>";
      table +=
        '<input type="checkbox" class="seats" value="' +
        (col + row) +
        '" ' +
        (!seats[col][row].isAvailable ? "checked" : "") +
        ">";
      table += "</td>";
      if ((index + 1) % 2 == 0) {
        table += "<td></td>";
      }
    });
    table += "</tr>";
    if ((index + 1) % 4 == 0) {
      table += '<tr class="seatVGap"></tr>';
    }
  });
  table +=
    "<tr><td></td><td><div class='d-flex p-2 bd-highlight bg-light text-dark justify-content-center align-text-top' style='height: 45px'>Door</div></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td><div class='d-flex p-2 bd-highlight bg-light text-dark justify-content-center align-text-top' style='height: 45px'>Door</div></td></tr>";
  return table;
}

function updateTicketInfo(
  selector = "#ticketinfo",
  noOfseats = 0,
  seats = 0,
  total = 0
) {
  $(selector).html(
    "<h4>Ticket Information</h4><hr>" +
      "<strong>Tickets: </strong> " +
      noOfseats +
      "<br>" +
      "<strong>Seats selected: </strong>" +
      seats +
      "</p><hr>" +
      "<strong>Total:</strong> P " +
      total +
      "<br> <br>" +
      '<button  class="confirm-btn block" data-toggle="modal" data-target="#confirm_modal">Proceed</button>'
  );
}

$(document).ready(function () {
  let index = getUrlVars().index;
  let movie = getMovie(index);
  let reservation = new Reservation(movie, getSeats(), []);

  updateTicketInfo("#ticketinfo", 0, 0, 0);
  $("#seatsBlock").append(populateViewSeats(reservation.getSeats()));

  $("#checkoutBtn").click(function (e) {
    e.preventDefault();
    if (reservation.getSelectedSeats().length > 0) {
      _addReservation({
        ticketInfo: {
          tickets: reservation.getSelectedSeats().length,
          seats: reservation.getSelectedSeats().join(","),
          total:
            reservation.getSelectedSeats().length * reservation.movie.price,
        },
        ...movie,
      });
      window.location.href = "checkout.html?index=" + getReservations().length;
    }
  });

  $('input[type="checkbox"]').click(function () {
    let seat = $(this).prop("value");
    let availablity = $(this).prop("checked");
    reservation.setSeatAvailability(
      seat.charAt(0),
      seat.charAt(1),
      !availablity
    );
    updateTicketInfo(
      "#ticketinfo",
      reservation.getSelectedSeats().length,
      reservation.getSelectedSeats().join(","),
      reservation.getSelectedSeats().length * reservation.movie.price
    );
  });
});
