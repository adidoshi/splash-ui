const dismiss = document.querySelector("#dismiss");
const closeModal = document.querySelector("#close-modal");
const openModal = document.querySelector("#open-modal");
const modal = document.querySelector(".modal-container");

openModal.addEventListener("click", () => {
  modal.style.display = "flex";
  document.body.style.overflow = "hidden";
});

dismiss.addEventListener("click", () => {
  modal.style.display = "none";
  document.body.style.overflow = "visible";
});

closeModal.addEventListener("click", () => {
  modal.style.display = "none";
  document.body.style.overflow = "visible";
});
