const imageContainerEl = document.querySelector(".image-container");
const rightEl = document.getElementById("right");
const leftEl = document.getElementById("left");
let x = 0;
let timer;

rightEl.addEventListener("click", () => {

    x = x - 45;
    clearTimeout(timer);
    updateGallery();
    
    }
);

leftEl.addEventListener("click", () => {

    x = x + 45;
    clearTimeout(timer);
    updateGallery();
    
    }
);

updateGallery();


function updateGallery() 

    {
        imageContainerEl.style.transform = `perspective(1000px) rotateY(${x}deg)`;

        timer = setTimeout(() => {

                x = x - 45;
                updateGallery();

            }, 3000);
    };