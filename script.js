let unit1 = document.querySelector(".unit-1");
let currentUnit1 = unit1.innerText;

let unit2 = document.querySelector(".unit-2");
let currentUnit2 = unit2.innerText;

let unit3 = document.querySelector(".unit-3");
let currentUnit3 = unit3.innerText;

let button = document.querySelectorAll("button");

let cartUnit1 = document.querySelector(".cart-1");
let cartUnit2 = document.querySelector(".cart-2");
let cartUnit3 = document.querySelector(".cart-3");

let finalValue = document.querySelector(".finalValue");
let total = document.querySelector(".total");

let cartItem = document.querySelectorAll(".cartItem");

let emptyCart = document.querySelector(".emptyCart");

button.forEach((element) => {
    element.addEventListener("click", () => {
        if (element.classList.contains("positive1")) {
            currentUnit1++;
            unit1.innerText = currentUnit1;
            cartUnit1.innerText = currentUnit1;
            cartItem[0].classList.remove("hidden");
            total.classList.remove("hidden");
            emptyCart.classList.add("hidden");
        } else if (element.classList.contains("negative1") && currentUnit1 > 0) {
            currentUnit1--;
            unit1.innerText = currentUnit1;
            cartUnit1.innerText = currentUnit1;
            if (currentUnit1 == 0) {
                cartItem[0].classList.add("hidden");
            }
        } else if (element.classList.contains("positive2")) {
            currentUnit2++;
            unit2.innerText = currentUnit2;
            cartUnit2.innerText = currentUnit2;
            cartItem[1].classList.remove("hidden");
            total.classList.remove("hidden");
            emptyCart.classList.add("hidden");
        } else if (element.classList.contains("negative2") && currentUnit2 > 0) {
            currentUnit2--;
            unit2.innerText = currentUnit2;
            cartUnit2.innerText = currentUnit2;
            if (currentUnit2 == 0) {
                cartItem[1].classList.add("hidden");
            }
        } else if (element.classList.contains("positive3")) {
            currentUnit3++;
            unit3.innerText = currentUnit3;
            cartUnit3.innerText = currentUnit3;
            cartItem[2].classList.remove("hidden");
            total.classList.remove("hidden");
            emptyCart.classList.add("hidden");
        } else if (element.classList.contains("negative3") && currentUnit3 > 0) {
            currentUnit3--;
            unit3.innerText = currentUnit3;
            cartUnit3.innerText = currentUnit3;
            if (currentUnit3 == 0) {
                cartItem[2].classList.add("hidden");
            }
        }

        if (currentUnit1 > 0 || currentUnit2 > 0 || currentUnit3 > 0) {
            let sum = currentUnit1 * 120 + currentUnit2 * 70 + currentUnit3 * 60;
            finalValue.innerText = sum;
        } else {
            finalValue.innerText = 0;
            cartItem[0].classList.add("hidden");
            cartItem[1].classList.add("hidden");
            cartItem[2].classList.add("hidden");
            total.classList.add("hidden");
            emptyCart.classList.remove("hidden");
        }
    });
});
