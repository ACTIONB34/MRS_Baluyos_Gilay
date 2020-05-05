function populateReservationTable(
	selector,
	ticketNo,
	DateBooked,
	Movie,
	Cinema,
	Time,
	noOfTicket,
	seats,
	Status
) {
	let content =
		"<tr>" +
			"<td>" +
				'<div class="social-links text-center text-md-right pt-3 pt-md-0">' +
					'<a href="checkout.html?index=' + ticketNo + '" class="linkedin"><i class="icofont-look"></i></a>' +
					'<a href="#" onClick="removeReservations(\'' + ticketNo + '\',\'reservations.html\')" class="linkedin"><i class="icofont-ui-delete"></i></a>' +
				"</div>" +
			"</td>" +
			// "<td>" + ticketNo +
			// "</td>" +
			"<td>" + DateBooked +
			"</td>" +
			"<td>" + Movie +
			"</td>" +
			"<td>" + Cinema +
			"</td>" +
			"<td>" + Time +
			"</td>" +
			"<td>" + noOfTicket +
			"</td>" +
			"<td>" + seats +
			"</td>" +
			"<td>Pending</td>" +
		"</tr>";

	$(selector).children("tbody").append(content);
}

$(function() {
	let reservations = getReservations();
	reservations.map(
		({
			index,
			showDate,
			title,
			scheduleInfo,
			ticketInfo
		}, rindex) => {
			populateReservationTable(
				"#reservationTable",
				rindex,
				scheduleInfo.date,
				title,
				scheduleInfo.cinema,
				scheduleInfo.timeRange,
				ticketInfo.tickets,
				ticketInfo.seats
			);
		}
	);
});