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

const galleryItems = Array.from(document.querySelectorAll(".gallery-item"));
const lightbox = document.getElementById("gallery-lightbox");
const lightboxImage = lightbox.querySelector(".lightbox-image");
const lightboxCaption = document.getElementById("lightbox-caption");
const closeButton = lightbox.querySelector(".lightbox-close");
let currentIndex = 0;
let opener = null;

function showImage(index) {
  currentIndex = (index + galleryItems.length) % galleryItems.length;
  const item = galleryItems[currentIndex];
  const image = item.querySelector("img");
  lightboxImage.src = image.currentSrc || image.src;
  lightboxImage.alt = image.alt;
  lightboxCaption.textContent = item.querySelector(".gallery-caption b").textContent;
}

function closeLightbox() {
  lightbox.close();
  if (opener) opener.focus();
}

galleryItems.forEach((item, index) => item.addEventListener("click", () => {
  opener = item;
  showImage(index);
  lightbox.showModal();
  closeButton.focus();
}));
closeButton.addEventListener("click", closeLightbox);
lightbox.querySelector(".previous").addEventListener("click", () => showImage(currentIndex - 1));
lightbox.querySelector(".next").addEventListener("click", () => showImage(currentIndex + 1));
lightbox.addEventListener("click", event => { if (event.target === lightbox) closeLightbox(); });
lightbox.addEventListener("keydown", event => {
  if (event.key === "ArrowLeft") showImage(currentIndex - 1);
  if (event.key === "ArrowRight") showImage(currentIndex + 1);
  if (event.key === "Escape") {
    event.preventDefault();
    closeLightbox();
  }
});
