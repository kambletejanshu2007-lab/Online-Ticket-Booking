function bookTicket() {

    let passenger = document.getElementById("passenger").value;
    let from = document.getElementById("from").value;
    let to = document.getElementById("to").value;
    let date = document.getElementById("date").value;
    let time = document.getElementById("time").value;

    if (passenger === "" || from === "" || to === "" || date === "" || time === "") {
        alert("Please fill all details!");
        return;
    
    document.getElementById("result").innerHTML = `
        <div class="ticket">
            <h2>Ticket Booked Successfully!</h2>
            <p><b>Passenger:</b> ${passenger}</p>
            <p><b>From:</b> ${from}</p>
            <p><b>To:</b> ${to}</p>
            <p><b>Journey Date:</b> ${date}</p>
            <p><b>Journey Time:</b> ${time}</p>
        </div>
    `;
}

    if (from === to) {
        alert("From and To cannot be same!");
        return;
    }
