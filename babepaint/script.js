document.addEventListener("DOMContentLoaded", () => {
  const envelope = document.getElementById("envelopeButton");
  const modal = document.getElementById("letterModal");
  const closeModal = document.getElementById("closeModal");

  const openLetter = () => {
    if (!envelope.classList.contains("open")) {
      envelope.classList.add("open");
    }
    modal.classList.add("show");
  };

  const hideLetter = () => {
    modal.classList.remove("show");
  };

  envelope.addEventListener("click", openLetter);

  closeModal.addEventListener("click", hideLetter);

  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      hideLetter();
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("show")) {
      hideLetter();
    }
  });
});


