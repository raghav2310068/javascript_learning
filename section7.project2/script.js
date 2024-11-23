"use strict";
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnOpenModal = document.querySelectorAll(".show-modal");
const btnCloseModal = document.querySelector(".close-modal");

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};
const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
  //console.log(btnOpenModal[i].textContent);
};

for (let i = 0; i < btnOpenModal.length; i++)
  btnOpenModal[i].addEventListener("click", openModal);

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

// global functions document pr apply hote h .......

document.addEventListener("keydown", function (e) {
  // yha jo humne e pass kra h ye jo bhi hum event perferom krte h uska ek object type ka create ho jata h ..
  console.log(e);
  if (e.key === "Escape" && !modal.classList.contains("hidden")) closeModal();
});
