// script.js
document.addEventListener("DOMContentLoaded", function () {
  const track = document.querySelector(".slide-track");
  let currentIndex = 0;
  const maxIndex = track.children.length - 1;
  const slideWidth = track.children[0].offsetWidth;

  function updateSlidePosition() {
    track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
  }

  document.querySelector(".next").addEventListener("click", function () {
    if (currentIndex < maxIndex) {
      currentIndex++;
      updateSlidePosition();
    }
  });

  document.querySelector(".prev").addEventListener("click", function () {
    if (currentIndex > 0) {
      currentIndex--;
      updateSlidePosition();
    }
  });
});
