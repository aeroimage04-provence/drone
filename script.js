document.getElementById("contact-form").addEventListener("submit", function (event) {
  event.preventDefault();
  const data = new FormData(this);
  const subject = encodeURIComponent("Demande de devis AeroImage 04 — " + data.get("service"));
  const body = encodeURIComponent(
    "Nom : " + data.get("name") + "\n" +
    "E-mail : " + data.get("email") + "\n" +
    "Prestation : " + data.get("service") + "\n\n" +
    "Projet :\n" + data.get("message")
  );
  window.location.href = "mailto:aeroimage04@gmail.com?subject=" + subject + "&body=" + body;
});
