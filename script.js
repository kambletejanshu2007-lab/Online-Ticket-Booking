// ONLINE TICKET BOOKING
// QUEUE DATA STRUCTURE - FIFO
// ==========================================


// Queue
let bookingQueue = [];


// Get form
const bookingForm = document.getElementById("bookingForm");


// When BOOK TICKET is clicked
bookingForm.addEventListener("submit", function (event) {

    event.preventDefault();


    // Get values
    const passengerName =
        document.getElementById("passengerName").value.trim();

    const from =
        document.getElementById("from").value;

    const destination =
        document.getElementById("destination").value;

    const journeyDate =
        document.getElementById("journeyDate").value;

    const hour =
    document.getElementById("journeyHour").value;

const minute =
    document.getElementById("journeyMinute").value;

const ampm =
    document.getElementById("ampm").value;

const journeyTime = `${hour}:${minute} ${ampm}`;

    const transport =
        document.getElementById("transport").value;

    const seatType =
        document.getElementById("seatType").value;


    // Check same city
    if (from === destination) {

        alert(
            "From and Destination cannot be the same."
        );

        return;
    }


    // Create ticket object
    const ticket = {

        id: Date.now(),

        passengerName: passengerName,

        from: from,

        destination: destination,

        date: journeyDate,

        time: journeyTime,

        transport: transport,

        seatType: seatType
    };


    // ==========================================
    // ENQUEUE
    // Add ticket at the end of Queue
    // ==========================================

    bookingQueue.push(ticket);


    // Update screen
    displayBookingHistory();

    updateQueueCount();


    // Clear form
    bookingForm.reset();


    // Success message
    alert(
        "🎫 Ticket booked successfully!\n\n" +
        `Passenger: ${passengerName}\n` +
        `From: ${from}\n` +
        `To: ${destination}\n` +
        `Date: ${journeyDate}\n` +
        `Time: ${journeyTime}\n` +
        `Transport: ${transport}\n` +
        `Seat Type: ${seatType}\n`
    );

});


// ==========================================
// DISPLAY BOOKING HISTORY
// ==========================================

function displayBookingHistory() {

    const history =
        document.getElementById("bookingHistory");


    // Clear old content
    history.innerHTML = "";


    // If queue is empty
    if (bookingQueue.length === 0) {

        history.innerHTML = `

            <div class="empty-history">

                <div class="empty-icon">
                    🎫
                </div>

                <h3>No Tickets Yet</h3>

                <p>
                    Book your first ticket to see it here.
                </p>

            </div>

        `;

        return;
    }


    // ==========================================
    // FIFO ORDER
    // First ticket appears first
    // ==========================================

    bookingQueue.forEach(function (ticket, index) {

        const ticketElement =
            document.createElement("div");


        ticketElement.className = "ticket";


        ticketElement.innerHTML = `

            <div class="ticket-header">

                <div class="ticket-number">
                    🎫 Ticket #${index + 1}
                </div>

                <div class="ticket-status">
                    BOOKED
                </div>

            </div>


            <div class="ticket-route">

                <div class="city">
                    ${ticket.from}
                </div>

                <div class="arrow">
                    →
                </div>

                <div class="city">
                    ${ticket.destination}
                </div>

            </div>


            <div class="ticket-details">

                <div class="detail">
                    👤 Passenger
                    <strong>
                        ${ticket.passengerName}
                    </strong>
                </div>


                <div class="detail">
                    📅 Date
                    <strong>
                        ${ticket.date}
                    </strong>
                </div>


                <div class="detail">
                    🕐 Time
                    <strong>
                        ${ticket.time}
                    </strong>
                </div>


                <div class="detail">
                    🚆 Transport
                    <strong>
                        ${ticket.transport}
                    </strong>
                </div>


                <div class="detail">
                    💺 Seat
                    <strong>
                        ${ticket.seatType}
                    </strong>
                </div>

            </div>

        `;


        history.appendChild(ticketElement);

    });

}


// ==========================================
// QUEUE COUNT
// ==========================================

function updateQueueCount() {

    document.getElementById("queueCount").textContent =
        bookingQueue.length;

}

// ===============================
// PAYMENT SYSTEM
// ===============================

let currentTicket = null;
let ticketPrice = 100;


// UPI PAYMENT
function openUPIPayment() {

    document.getElementById("paymentModal").style.display = "none";

    document.getElementById("upiModal").style.display = "flex";

    document.getElementById("ticketAmount").innerText = ticketPrice;

    document.getElementById("enteredAmount").value = ticketPrice;

    const upiID = "yourupi@upi";

    const qrData =
        "upi://pay?pa=" +
        upiID +
        "&pn=TicketBook&am=" +
        ticketPrice +
        "&cu=INR";

    const qrURL =
        "https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=" +
        encodeURIComponent(qrData);

    document.getElementById("upiQR").src = qrURL;
}


// PAYMENT DONE
function completePayment() {

    const amount =
        Number(document.getElementById("enteredAmount").value);

    if (amount <= 0) {
        alert("Please enter a valid amount.");
        return;
    }

    if (amount !== ticketPrice) {
        alert("Please enter correct amount: ₹" + ticketPrice);
        return;
    }

    document.getElementById("paymentMessage").innerHTML =
        "✅ Payment Successful!";

    setTimeout(function() {

        closeUPI();

        addTicketToHistory();

    }, 1200);
}


// CLOSE PAYMENT
function closePayment() {
    document.getElementById("paymentModal").style.display = "none";
}


// CLOSE UPI
function closeUPI() {
    document.getElementById("upiModal").style.display = "none";
}


// CASH PAYMENT
function cashPayment() {
    alert("Cash payment selected. Please pay at the counter.");
}
