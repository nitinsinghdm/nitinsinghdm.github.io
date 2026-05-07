const reveals = document.querySelectorAll(".reveal");

function revealSections(){

  reveals.forEach((section) => {

    const windowHeight = window.innerHeight;
    const sectionTop = section.getBoundingClientRect().top;

    if(sectionTop < windowHeight - 120){
      section.classList.add("active");
    }

  });

}

window.addEventListener("scroll", revealSections);

revealSections();

/* AUTO CAROUSEL */

const carousels = document.querySelectorAll(".carousel-container");

carousels.forEach((carousel) => {

  const images = carousel.querySelectorAll(".carousel-image");
  const nextBtn = carousel.querySelector(".next");
  const prevBtn = carousel.querySelector(".prev");

  let index = 0;

  function showImage(i){

    images.forEach((img) => {
      img.classList.remove("active");
    });

    images[i].classList.add("active");

  }

  nextBtn.addEventListener("click", () => {

    index++;

    if(index >= images.length){
      index = 0;
    }

    showImage(index);

  });

  prevBtn.addEventListener("click", () => {

    index--;

    if(index < 0){
      index = images.length - 1;
    }

    showImage(index);

  });

  /* AUTO SLIDE */

  setInterval(() => {

    index++;

    if(index >= images.length){
      index = 0;
    }

    showImage(index);

  }, 2000);

});