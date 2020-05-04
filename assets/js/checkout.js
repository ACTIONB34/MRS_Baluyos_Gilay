$(function () {
  let iC = getUrlVars().index;
  let reservation = getReservations().find((_, index) => index + "" === iC);
  //   console.log(reservation);
  $("#poster").attr("src", reservation.image);
  $("#title").html(reservation.title);
  $("#casts").html(reservation.starring);
  $("#director").html(reservation.director);
  $("#time").html(reservation.scheduleInfo.timeRange);
  $("#dtime").html(reservation.scheduleInfo.date);
  $("#seats").html(reservation.ticketInfo.seats);
  $("#total").html("P" + reservation.ticketInfo.total);
});
