function updateColor(color) {
    const leftImg = document.querySelector(".img");
    const rightText = document.querySelector(".right__text");
    const price = document.getElementById("price");
    
    if (color === "White") {
        leftImg.src = "./img/mbp14-silver-select-202110 1.svg";
        rightText.textContent = "White";
        price.textContent = "$1999";
    } else if (color === "Space Grey") {
        leftImg.src = "./img/mbp14-spacegray-select-202110 1.svg";
        rightText.textContent = "Space Grey";
        price.textContent = "$1999";
    }
}


const basePrice = 1999;
let totalPrice = basePrice;

function updatePrice(additionalPrice) {
    totalPrice = basePrice + additionalPrice;
    document.getElementById("price").textContent = `$${totalPrice}`
    document.querySelectorAll(".but").forEach(button => {
        if (button.textContent.indexOf("+") !== -1) {
            button.style.backgroundColor = (button.textContent.indexOf(additionalPrice) !== -1);
        }
    });
}