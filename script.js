function startCountdown() {
    let countdownDate = new Date("2025-03-03T00:00:00").getTime();
    let x = setInterval(function() {
        let now = new Date().getTime();
        let distance = countdownDate - now;
        let days = Math.floor(distance / (1000 * 60 * 60 * 24));
        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);
        document.getElementById("countdown").innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
        if (distance < 0) {
            clearInterval(x);
            document.getElementById("countdown").innerHTML = "Happy Birthday!";
        }
    }, 1000);
}

function sendWish() {
    let name = document.getElementById("name").value;
    let wish = document.getElementById("wish").value;
    let whatsappLink = `https://wa.me/your_number?text=${encodeURIComponent(name + " says: " + wish)}`;
    window.open(whatsappLink, "_blank");
}

window.onload = startCountdown;
