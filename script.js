let order = "";

function addItem(item) {
    order += item + "%0A";
    document.getElementById("orderBox").value =
        decodeURIComponent(order);
}

function sendWhatsApp() {
    let phoneNumber = "919370569122"; // OWNER NUMBER
    let message = "Hello Enlighten Cafe,%0AMy Order:%0A" + order;

    let url = "https://wa.me/" + phoneNumber + "?text=" + message;
    window.open(url, "_blank");
}
