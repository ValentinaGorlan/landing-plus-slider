window.addEventListener("DOMContentLoaded", () => {

    const items = document.querySelectorAll(".slider_block .item"),
      nextBtn = document.querySelector(".slider .next"),
      prevBtn = document.querySelector(".slider .prev");

    let index = 1;

    function showSlides(n) {
      if (n > items.length) {
        index = 1;
      }

      if (n < 1) {
        index = items.length;
      }

      items.forEach((item) => {
        item.classList.remove("active");
        item.classList.add("item");
      });

      items[index - 1].classList.add("active");
    }

    showSlides(index);

    nextBtn.addEventListener("click", () => {
      showSlides((index += 1));
    });

    prevBtn.addEventListener("click", () => {
      showSlides((index -= 1));
    });


    const slider_block = document.querySelector(".slider_block"),
      slides = document.querySelectorAll(".slider_block .item");

    slider_block.addEventListener("click", (e) => {
      let target = e.target,
        k = document.querySelector(".active").getAttribute("src"),
        j = target.getAttribute("src");

      if (target && target.classList.contains("item")) {
        document.querySelector(".active").setAttribute("src", j);
        target.setAttribute("src", k);
      }
    });

});


