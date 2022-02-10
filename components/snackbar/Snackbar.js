const toast = document.querySelector(".primary-toast");
const btnToast = document.querySelector("#show-toast");
const dismiss = document.querySelector("#dismiss");

btnToast.addEventListener("click", () => {
  toast.classList.add("active-toast");
  toast.style.display = "block";

  setTimeout(() => {
    toast.classList.remove("active-toast");
  }, 3000);
});

dismiss.addEventListener("click", () => {
  toast.style.display = "none";
});
