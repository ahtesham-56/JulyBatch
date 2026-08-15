function updateClock() {
    const now = new Date();

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    // AM / PM
    let period = hours >= 12 ? "PM" : "AM";

    // Convert to 12-hour format
    hours = hours % 12;
    hours = hours === 0 ? 12 : hours;

    // Add 0 before single digit
    hours = String(hours).padStart(2, "0");
    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");

    document.getElementById("clock").innerText =
        `${hours}:${minutes}:${seconds} ${period}`;

    // Date
    const date = now.toLocaleDateString("en-IN", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
    });

    document.getElementById("date").innerText = date;
}

// Update every second
setInterval(updateClock, 1000);

// Run immediately
updateClock();