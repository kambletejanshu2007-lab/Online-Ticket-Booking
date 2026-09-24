# Online-Ticket-Booking
* {
    box-sizing: border-box;
    font-family: Arial, sans-serif;
}

body {
    margin: 0;
    background: #f2f2f2;
}

.container {
    width: 90%;
    max-width: 1100px;
    margin: 40px auto;
    background: white;
    padding: 30px;
    border-radius: 10px;
    box-shadow: 0 4px 15px rgba(0,0,0,0.15);
}

h1 {
    text-align: center;
    color: red;
    font-family: Impact, sans-serif;
    font-size: 40px;
    margin: 0;
}

.subtitle {
    text-align: center;
    font-size: 20px;
    margin-bottom: 35px;
}

.form-box {
    width: 100%;
}

label {
    display: block;
    font-weight: bold;
    font-size: 18px;
    margin-bottom: 8px;
    margin-top: 15px;
}

input,
select {
    width: 100%;
    padding: 14px;
    font-size: 16px;
    border: 1px solid #aaa;
    border-radius: 6px;
}

.row {
    display: flex;
    gap: 20px;
}

.field {
    width: 50%;
}

button {
    width: 100%;
    margin-top: 25px;
    padding: 15px;
    background: #263a63;
    color: white;
    border: none;
    border-radius: 6px;
    font-size: 18px;
    cursor: pointer;
}

button:hover {
    background: #18294a;
}

.ticket {
    margin-top: 25px;
    padding: 20px;
    background: #eef3ff;
    border-left: 5px solid #263a63;
}

.ticket h2 {
    color: green;
}

/* Mobile */
@media (max-width: 700px) {
    .row {
        flex-direction: column;
        gap: 0;
    }

    .field {
        width: 100%;
    }

    h1 {
        font-size: 28px;
    }
}
