"use strict"

const btn = document.querySelector(".btn");
const btnText = btn.textContent;

btn.addEventListener("click", () => {
    console.log(btnText)
    if (!btn.classList.contains("active")) {
        btn.classList.add("active")
        btn.textContent = "";
    }
    if (btn.classList.contains("done")) {
        btn.classList.remove("active");
        btn.classList.remove("done");
        btn.textContent = "";
        btn.textContent = `${btnText}`;
    }
})

btn.addEventListener("animationend", () => {
    btn.classList.add("done")
    btn.textContent = "Done!";
})

