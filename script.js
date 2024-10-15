const n = 7;
const targetIndex = (n % 10) + 1;
let toggleColor1 = false;
let toggleColor2 = false;

const elements = document.querySelectorAll('p, h2, h3, ul li, ol li');

if (elements[targetIndex - 1]) {
    elements[targetIndex - 1].id = "targetElement";
}

if (elements[targetIndex]) {
    elements[targetIndex].classList.add("nextElement");
}

document.getElementById("targetElement")?.addEventListener("click", () => {
    toggleColor1 = !toggleColor1;
    document.getElementById("targetElement").classList.toggle("toggle-color-1", toggleColor1);
    document.getElementById("targetElement").classList.toggle("toggle-color-2", !toggleColor1);
});

document.querySelector(".nextElement")?.addEventListener("click", () => {
    toggleColor2 = !toggleColor2;
    document.querySelector(".nextElement").classList.toggle("toggle-color-1", toggleColor2);
    document.querySelector(".nextElement").classList.toggle("toggle-color-2", !toggleColor2);
});


function addImage() {
    const img = document.getElementById("city-image");
    if (!img) {
        const newImg = document.createElement("img");
        newImg.src = "images/Lviv-market-square.jpg";
        newImg.alt = "Фото Львова";
        newImg.id = "city-image";
        newImg.width = 500;
        newImg.height = 350;
        document.body.appendChild(newImg);
    }
}

function increaseImage() {
    const img = document.getElementById("city-image");
    if (img) {
        img.width *= 1.2;
        img.height *= 1.2;
    }
}

function decreaseImage() {
    const img = document.getElementById("city-image");
    if (img) {
        img.width *= 0.8;
        img.height *= 0.8;
    }
}

function removeImage() {
    const img = document.getElementById("city-image");
    if (img) {
        img.remove();
    }
}
