function toggleMenu() {
  document.getElementById("menu").classList.toggle("active");
}
function toggleMenu() {
  document.getElementById("menu").classList.toggle("active");
}

function sendwhatsaap() {
  const phoneNumber = "919869449919";

  const message =
    "Hello Sangam Fabricators,\n\n" +
    "I would like to request a quote for metal fabrication / welding work." 

  const encodedMessage = encodeURIComponent(message);
  const url = "https://wa.me/" + phoneNumber + "?text=" + encodedMessage;

  window.open(url, "_blank");
}